var phys = +prompt("Enter Phycics marks")
var chem = +prompt("Enter Chemistry marks")
var eng = +prompt("Enter English marks")
var comp = +prompt("Enter Computer marks")
var urdu = +prompt("Enter urdu marks")
var maths = +prompt("Enter Mathematics marks")
var total = (phys + chem + maths + eng + urdu + comp) / 600 * 100

document.write("Physcics marks: " + phys)
document.write("<br><br>")

document.write("Chemistry marks: " + chem)
document.write("<br><br>")

document.write("Mathematics marks: " + maths)
document.write("<br><br>")

document.write("Urdu marks: " + urdu)
document.write("<br><br>")

document.write("Computer marks: " + comp)
document.write("<br><br>")

document.write("English marks: " + eng)
document.write("<br><br>")


if (total < 60){
    document.write("Failed")
    document.write("<br>")
    document.write(total + "%")
}
else if (total < 70){
    document.write("Grade: D")
    document.write("<br>")
    document.write(total + "%")
}
else if (total < 80){
    document.write("Grade: C")
    document.write("<br>")
    document.write(total + "%")
}
else if (total < 90){
    document.write("Grade: B")
    document.write("<br>")
    document.write(total + "%")
}
else if (total < 100){
    document.write("Grade: A")
    document.write("<br>")
    document.write(total + "%")
}
else {
    document.write("Absent")
}