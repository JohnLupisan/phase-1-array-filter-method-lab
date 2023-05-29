
function findMatching (drivers, string) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase() === string.toLowerCase() })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(letter => letter[0] === string[0])
}

function matchName(drivers, string) {
    return drivers.filter(driver => string === driver.name)
}