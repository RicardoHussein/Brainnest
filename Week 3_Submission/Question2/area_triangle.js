let side_a = 5;

let side_b = 6;

let side_c = 7;

let semi_perimeter = (side_a + side_b + side_c)/2;

let area;

area = Math.sqrt(semi_perimeter * (semi_perimeter - side_a) * (semi_perimeter - side_b) * (semi_perimeter - side_c))

alert("The area of the triangle is "+ area);