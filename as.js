async function fun1() {
  const x = async function () {
    let sum = 0;
    for (let i = 0; i < 200000000; i++) {
      sum += i;
    }

    return sum;
    9;
  };
  x().then((res) => console.log(res));
  console.log("newval");
  const newval2 = await x();
  console.log("valagain", newval2);
  return "result";
}
fun1().then((res) => console.log(res));
console.log("out of context");
