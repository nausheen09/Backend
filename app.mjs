import express from 'express';
const app = express()
const PORT = process.env.PORT || 5001; // 5001 ya koi aur free port

app.get('/', (req, res) => {
  res.send('Hello NAUSHEEN ok')
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
