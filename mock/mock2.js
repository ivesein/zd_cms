var Mock = require('mockjs');

Mock.Random.extend({
    school: function() {
        var school = ["西安交大", "西工大", "陕师大", "西京医院", "唐都医院"];
        return this.pick(school);
    },
    tag: function() {
        var tag = ["基因测序", "引物合成"];
        return this.pick(tag);
    },
    address: function() {
        var address = [
            "陕西省西安市咸宁西路28号",
            "陕西省西安市长安区西长安街620号"
        ];
        return this.pick(address);
    },
    price: function() {
        var price = ['14￥', '15￥', '16￥', '17￥', '18￥', '20￥'];
        return this.pick(price);
    },
    progress: function() {
        var progress = [true, false];
        return this.pick(progress);
    }
});

var template = {
    "list2|100-300": [{
        date: "@date",
        name: "@cfirst@clast",
        school: "@school",
        Laboratory: "实验楼" +
            Mock.Random.integer(1, 10) +
            "楼" +
            Mock.Random.integer(1, 10) +
            "室",
        leaderName: "牛二",
        phone: /^1[3578][1-9]\d{8}/,
        email: "@email",
        address: "@address",
        tag: "@tag",
        price: "@price",
        orderNumber: Mock.Random.integer(4, 20),
        progress: "@progress"
    }]
};

Mock.mock("http://www.zhuoding/api/orderdata", template);