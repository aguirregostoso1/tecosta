const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const authRoutes = require('./routes/authRoutes');
const indexRoutes = require('./routes/indexRoutes');
const userRoutes = require('./routes/usuariosRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const atendimentoRoutes = require('./routes/atendimentoRoutes');

const session = require('express-session');

const requireAuth = require('./middleware/requireAuth');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(expressLayouts);

app.use(
  session({
    secret: '2787ewdansWN898n29%$lqalod',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 }, 
  })
);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/usuarios', requireAuth, userRoutes);
app.use('/produtos', produtoRoutes);
app.use('/atendimentos', atendimentoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
