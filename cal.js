function calculate() {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numbers.length === 0) {
        alert("Por favor, insira números válidos.");
        return;
    }

    const mean = calculateMean(numbers);
    const median = calculateMedian(numbers);
    const mode = calculateMode(numbers);

    document.getElementById('mean').innerText = `Média: ${mean}`;
    document.getElementById('median').innerText = `Mediana: ${median}`;
    document.getElementById('mode').innerText = `Moda: ${mode}`;
}

function calculateMean(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return (total / numbers.length).toFixed(2);
}

function calculateMedian(numbers) {
    numbers.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        return ((numbers[mid - 1] + numbers[mid]) / 2).toFixed(2);
    } else {
        return numbers[mid].toFixed(2);
    }
}

function calculateMode(numbers) {
    const frequency = {};
    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    let maxFreq = 0;
    let mode = [];
    for (const num in frequency) {
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            mode = [num];
        } else if (frequency[num] === maxFreq) {
            mode.push(num);
        }
    }

    return mode.length > 1 ? `Multimodal: ${mode.join(',')}` : `: ${mode[0]}`;
}
