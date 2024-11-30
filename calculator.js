window.alert("calculate number of emissions your washing machine outputs")
x = parseInt(window.prompt("Enter numbers of watts per 1,000"))
y = parseInt(window.prompt("Enter number of loads"))

totale = x*1000 * 0.86 * y
window.alert(totale)

document.write(totale)
document.write("<br>")

window.alert("calculate number of emissions your dryer outputs")
d = parseInt(window.prompt("number of watts"))
h = parseInt(window.prompt("Enter number of loads"))

totald = d*1000 * 0.86 * h
window.alert(totald)

document.write(totald)
document.write("<br>")

window.alert("calculate number of emissions your light bulb output")

o = parseInt(window.prompt("number of watts"))
n = parseInt(window.prompt("enter number of hours used"))
k = parseInt(window.prompt("enter number of bulbs"))

totalo = o*3600 * 1000* 0.86*n*7 * k

window.alert(totalo + "ans [c02 in kg]")
document.write(totalo)
document.write("<br>")

window.alert("calculate number of emissions that your car outputs")

c = parseInt(window.prompt("number of km travelled per day"))
totalc = c*7*0.621371*(400/1000)

window.alert(totalc + "[ans in kg of co2]")

document.write(totalc)
document.write("<br>")
