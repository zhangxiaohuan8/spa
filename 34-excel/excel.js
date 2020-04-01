$(function() {
    var e = $("#main");
    return new Handsontable(e.get(0),{
        data: [["Java", "1", "降", "-0.01%"], 
        ["C", "2", "升", "+2.44%"], 
        ["Python", "3", "升", "-2.58%"],
        ["C++", "4", "降", "+2.07%"],
        ["C#", "5", "升", "-1.17%"],
        ["Visual Basic .NET", "6", "降", "-0.85%"],
        ["JavaScript", "7", "降", "-0.28%"]],
        colHeaders: ["语言名称", "排名", " 升或降", "变化幅度"],
        colWidths:150,
        rowHeights:40,
        className: 'htCenter htMiddle',
    })
    
});