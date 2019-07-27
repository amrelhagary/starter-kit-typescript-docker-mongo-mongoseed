import application from './app';

const PORT = process.env.NODE_PORT || 4242;

application.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`);
});

module.exports = application;
