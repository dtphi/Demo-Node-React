import dotenv from 'dotenv'
import express from 'express'
import passport from 'passport'
import passportLocal from 'passport-local'
import session from 'express-session'

dotenv.config()
const { PORT, KEY_SESSION } = process.env
const localStrategy = passportLocal.Strategy
const store = session.MemoryStore()

const app = express()
// express > 4.6 ... support express.json() return response json
app.use(express.json())

// Middleware session
app.use(session({
    saveUninitialized: false,
    secret: KEY_SESSION,
    cookie: {
        maxAge: 1000 * 20 // 20sec
    },
    store
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/status', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'OK'
    })
})

app.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login'
}), (req, res) => {
    try {
        console.log(req.body)
        res.json({
            result: req.body
        })
        console.log(`Login successfully`)
    } catch (err) {
        console.log(err.stack)
    }
})
// Database user.
const user = {
    "username": 'test@example.com',
    "password": 'test@123'
}
passport.use(new localStrategy((username, password, done) => {
    console.log(`User ${username} , pass ${password}`)
    if (username === user.username && password === user.password) {
        return done(null, {
            username,
            passport,
            active: true
        })
    }

    done(null, false)
}))
// Set session user.name to session
passport.serializeUser((user, done) => done(null, user.username))
// Get username from session.
passport.deserializeUser((username, done) => {
    console.log(`Deserializing ${username}`)
    // check user.username with username database
    if (username === user.username) {
        return done(null, {
            username: username,
            active: true
        })
    }

    done(null, false)
})

app.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({
            status: 'Invalid login',
            message: 'Login required'
        })
    }
    return res.status(200).json({
        status: 'success',
        message: 'Profile page'
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})