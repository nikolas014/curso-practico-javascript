/*
- Segundo paso: Implemetar formulas en javascript
- Tercer paso: crear funciones
- Cuarto paso: integrar JS con HTML
*/

// Código cuadrado
console.group("Cuadrados")
// let ladoCuadrado, perimetroCuadrado, areaCuadrado
ladoCuadrado = 5
console.log(`Los ladoCuadrados del cuadrado miden: ${ladoCuadrado} cm`)
// perimetroCuadrado = ladoCuadrado * 4
// console.log(`El Perimetro del cuadrado es: ${perimetroCuadrado} cm`)
// areaCuadrado = ladoCuadrado * ladoCuadrado
// console.log(`El Área del cuadrado es: ${areaCuadrado} cm^2`)
console.groupEnd()

// Código triangulo
console.group("Triángulos")
// let ladoTriangulo1, ladoTriangulo2, baseTriangulo, perimetroTriangulo, areaTriangulo
ladoTriangulo1 = 6
ladoTriangulo2 = 6
baseTriangulo = 3
alturaTriangulo = 5.5
console.log(`Los lados del triángulo son: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${baseTriangulo} cm`)
// perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
// console.log(`El Perimetro del triángulo es: ${perimetroTriangulo} cm`)
// areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
// console.log(`El Área del trinángulo es: ${areaTriangulo} cm^2`)
console.groupEnd()

// Código circulo
console.group("Circulos")
// let radioCirculo, diametroCirculo, perimetroCirculo, areaCirculo
radioCirculo = 4
diametroCirculo = radioCirculo * 2
console.log(`El radio del circulo es ${radioCirculo} cm`)
console.log(`El diametro del circulo es: ${diametroCirculo} cm`)
console.log(`El valor de pi es ${Math.PI}`)
// perimetroCirculo = Math.PI * diametroCirculo
// console.log(`El perimetro del circulo es: ${perimetroCuadrado} cm`)
// areaCirculo = Math.PI * radioCirculo  * radioCirculo
// console.log(`El área del circulo es: ${areaCirculo} cm^2`)
console.groupEnd()


// Creacion funciones

// Cuadrado
function perimetroCuadrado(lado){
    return lado * 4
}
function areaCuadrado(lado){
    return lado * lado
}
// Triángulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1+lado2+base
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2
}
// Circulo
function perimetroCirculo(radio) {
    return radio * 2 * Math.PI
}
function areaCirculo(radio) {
    return radio * radio * Math.PI
}

// Funciones del HTML
// cuadrado
function calcularPerimetroCuadrado(){
    const lado = document.getElementById("inputCudrado").value
    const perimetro = perimetroCuadrado(lado)
    alert(`El perímetro del cuadrado es: ${perimetro}`)
}
function calcularAreaCuadrado(){
    const lado = document.getElementById("inputCudrado").value
    const area = areaCuadrado(lado)
    alert(`El área del cuadrado es: ${area} cm`)
}
