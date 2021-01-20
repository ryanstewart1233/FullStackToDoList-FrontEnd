import axios from "axios";

//the below url is used for testing
// export default axios.create({
//     baseURL: 'http://localhost:3001'
// })

export default axios.create({
  baseURL: "https://todolist12334.herokuapp.com/",
});
