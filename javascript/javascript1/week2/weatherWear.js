function weatherWear(temp) {
    if (temp <= 5) {
        return 'Thick jacket and hand gloves'
    }
    if (temp < 10) {
        return 'Normal jacket and gloves'
    }
    if (temp < 15) {
        return 'Thin jacket and wear anythign you want '
    }
    if (temp < 20) {
        return 'Shirt,t-shirt,jeans,etc'
    }
    if (temp < 25) {
        return 'Shorts and t-shirt'
    }
    if (temp >= 25) {
        return 'Nude on beach'
    }
}