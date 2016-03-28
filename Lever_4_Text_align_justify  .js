/**
 * @desciption 实现一个类似于css test-align: justify的效果
 * 地址: http://www.codewars.com/kata/text-align-justify/train/javascript
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function(str, len) {
    //先分好行, 再添加空格
    var lines = [];
    var arr = str.split(' ');
    //分行
    var lastline = arr.reduce(function(line, word) {
        if (line) {
            if (line.length + 1 + word.length <= len) {
                return line + ' ' + word;
            }
            lines.push(line);
        }
        return word;
    });
    //添加空格
    lines = lines.map(function(line) {
        if(line.indexOf(' ') >= 0) {
            for( var lineLen = line.length; lineLen < len;) {
                //可以看出对正则的g参数理解,每次匹配之后会到下一个匹配项
                line = line.replace(/ +/g, function(match) {
                    return match + (lineLen++ < len ? ' ' : '');
                })
            }
        }
        return line;
    });
    lastline && lines.push(lastline);
    return lines.join('\n');
};