import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "http://placeimg.com/64/64/1",
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
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id} // map을 사용할 때는 key를 지정해줘야 오류가 발생하지 않음
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
