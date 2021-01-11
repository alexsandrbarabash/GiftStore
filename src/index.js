import "./styles/style.scss";
import "./assets/img/logo.svg";

async function start() {
    return await Promise.resolve("async is working");
}

console.log('1df')

start().then(console.log);
