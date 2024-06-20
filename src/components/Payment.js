import axios from "axios";
import React, {useContext, useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import CheckoutProducts from './CheckoutProducts';
import ShoppingContext from './context/shopping/shoppingContext'
import CurrencyFormat from 'react-currency-format';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './Payment.css'
import {db} from  '../firebase'


const Payment = () => {
    const shoppingContext = useContext(ShoppingContext);
    const { basket, user, getBasketTotal, emptybasket } = shoppingContext;
    const stripe = useStripe();
    const history = useHistory();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //Generate client secret for payment intent on page load
        const getClientSecret = async () => {
            const responce = await axios({
                method: "post",
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(responce.data.clientSecret)
        };
        getClientSecret();
    }, [basket]);

    console.log("The secret is => ", clientSecret);
 
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:
                {card: elements.getElement(CardElement)}
        }).then(({ paymentIntent }) => {
            // payment intent = payment confirmed
            db.collection("user")
                .doc(user?.uid)
                .collection("orders")
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
    setSucceeded(true);
    setError(null);
    setProcessing(false);
    emptybasket();
    history.pushState("/orders")
});
    }
    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error? "event.error.message" : "");
    }

    return (
      
        <div className='payment'>
            <div className='payment_container'>
                <h1>Checkout <Link to='/checkout'>{basket?.lenght} items</Link></h1>
                <div className='payment_section'>
                    <div className='payment_title'><h3>Delivery Address</h3></div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 React JS re\oad</p>
                        <p>CApe Town, SOuth Africa</p>
                    </div>

                </div>
                <div className='payment_section'>
                    <div className='payment_title'><h3>Review items and Delivery</h3></div>
                    <div className="payment_items">
                        {basket.map((item) => (<CheckoutProducts
                        key={item.id} 
                        id={item.id} 
                        title={item.title} 
                        image={item.image} 
                        price={item.price} 
                        rating={item.rating} />))}
                    </div>
                    
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment method</h3></div>
                    <div className='payment_details'>
                        {/* Stripe code here */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment_price_container'>
                                <CurrencyFormat
                                    renderText={(value) => <h3>Order total: {value}</h3>}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={'$'} />
                                <button disabled={processing || disabled || succeeded}><span>{processing ? <p>Processing</p> : "Buy now"}</span></button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Payment