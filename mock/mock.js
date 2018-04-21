var Mock = require("mockjs");

//定义要用的随机数组
Mock.Random.extend({
    school: function(data) {
        var school = ["西安交大", "西工大", "陕师大", "西京医院", "唐都医院"];
        return this.pick(school);
    },
    leaderName: function() {
        var leaderName = ["大狗子", "二狗子", "三狗子", "四狗子"];
        return this.pick(leaderName);
    },
    address: function() {
        var address = [
            "陕西省西安市咸宁西路28号",
            "陕西省西安市长安区西长安街620号"
        ];
        return this.pick(address);
    },
    sequencePrice: function() {
        var sequencePrice = ["14￥", "15￥", "16￥", "18￥", "20￥"];
        return this.pick(sequencePrice);
    },
    primerPrice: function() {
        var primerPrice = ["1.5￥", "1.6￥", "1.7￥", "1.8￥", "2.0￥"];
        return this.pick(primerPrice);
    }
});

//定义数据模型
var template = {
    // 属性 list 的值是一个数组，随机生成1-1000组数据
    "list|1-1000": [{
        name: "@cfirst@clast",
        school: "@school",
        Laboratory: "实验楼" +
            Mock.Random.integer(1, 10) +
            "楼" +
            Mock.Random.integer(1, 10) +
            "室",
        leaderName: "@leaderName",
        phone: /^1[385][1-9]\d{8}/,
        email: "@email",
        address: "@address",
        sequencePrice: "@sequencePrice",
        primerPrice: "@primerPrice"
    }]
};

Mock.mock("http://www.zhuoding/api/data", template);