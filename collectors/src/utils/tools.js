// 封装本地存储的方法
var prototype={
    $setStroage(key, value) {
        //对象必须序列化才能存入缓存
        localStorage.setItem(key, JSON.stringify(value));
    },
    $getStroage(key) {
        //反序列化
        return JSON.parse(localStorage.getItem(key));
    },
    $removeStroage(key) {
        localStorage.removeItem(key);
    }
}
export default prototype;