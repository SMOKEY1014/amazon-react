

const stripe = require("stripe")("/----SECRETE KEY-----/");

// - API


// - APP  Config
const app = express();

// - Middlewares
app.use(cors({origin: true})); // Enable all CORS requests
app.use(express.json()) // Parse JSON bodies

app.exports("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log("Payment request received ", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    // if ookay
    res.status(201).send({clientSecret: paymentIntent.client_secret})
})

//  - API Routes
exports.api = functions.https.onRequest(app);