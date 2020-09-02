const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "http://placeimg.com/64/64/1", // 아무 이미지나 랜덤으로 가져와주는 사이트 .../size/size/number
      name: "Selly",
      birthday: "951222",
      gender: "female",
      job: "programmer",
    },
    {
      id: 2,
      image: "http://placeimg.com/64/64/2",
      name: "홍길동",
      birthday: "961222",
      gender: "male",
      job: "student",
    },
    {
      id: 3,
      image: "http://placeimg.com/64/64/3",
      name: "아영",
      birthday: "940301",
      gender: "female",
      job: "Composer",
    },
  ]);
});

app.listen(port, () => console.log(`Listening  on port ${port}`));
