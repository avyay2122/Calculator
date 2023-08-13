body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #eaeaea;
    margin: 0;
    font-family: Arial, sans-serif;
}

.calculator {
    width: 260px;
    background-color: #ff8888;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    padding: 10px;
    box-sizing: border-box;
}

.screen {
    grid-column: 1 / -1;
    font-size: 32px;
    color: #333;
    background-color: #ff8888;
    text-align: right;
    padding: 10px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.button, .clear, .equal {
    font-size: 24px;
    background-color: #444;
    color: #f5f5f5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.operator {
    background-color: #ff6666;
    color: #333;
}

.button:hover {
    background-color: #555;
}

.button:active {
    background-color: #333;
}
