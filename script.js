
const tools = [
    {
        name: "Word Counter",
        description: "Count words, characters, sentences and reading time.",
        icon: "📝"
    },
    {
        name: "Text Formatter",
        description: "Convert text case and remove extra spaces.",
        icon: "✍️"
    },
    {
        name: "Percentage Calculator",
        description: "Calculate percentages, discounts and percentage changes.",
        icon: "🧮"
    },
    {
        name: "Unit Converter",
        description: "Convert length, weight, temperature and time.",
        icon: "📏"
    },
    {
        name: "QR Code Generator",
        description: "Generate QR codes for text and website links.",
        icon: "📱"
    },
    {
        name: "Password Generator",
        description: "Generate random passwords with custom options.",
        icon: "🔐"
    },
    {
        name: "Stopwatch & Timer",
        description: "Track time with a stopwatch and countdown timer.",
        icon: "⏱️"
    }
];

const toolsContainer = document.getElementById("tools-container");
const searchInput = document.getElementById("search");
const homePage = document.getElementById("home-page");
const toolWorkspace = document.getElementById("tool-workspace");
const toolTitle = document.getElementById("tool-title");
const toolContent = document.getElementById("tool-content");

function displayTools(toolList) {
    toolsContainer.innerHTML = "";

    toolList.forEach(function(tool) {
        const card = document.createElement("div");
        card.className = "tool-card";

        card.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <h2>${tool.name}</h2>
            <p>${tool.description}</p>
            <button>Open Tool →</button>
        `;

        card.querySelector("button").addEventListener("click", function() {
            openTool(tool.name);
        });

        toolsContainer.appendChild(card);
    });
}

displayTools(tools);

searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();

    const filteredTools = tools.filter(function(tool) {
        return (
            tool.name.toLowerCase().includes(searchText) ||
            tool.description.toLowerCase().includes(searchText)
        );
    });

    displayTools(filteredTools);
});

function openTool(toolName) {
    if (toolName !== "Word Counter" && 
        toolName !== "Text Formatter" &&
        toolName !== "Percentage Calculator" && 
        toolName !== "Unit Converter" && 
        toolName !== "QR Code Generator ") {
        alert("This tool is coming soon!");
        return;
    }

    homePage.classList.add("hidden");
    document.querySelector("header").classList.add("hidden");
    toolWorkspace.classList.remove("hidden");

    toolTitle.textContent = toolName;

    if (toolName === "Word Counter") {
        toolContent.innerHTML = `
            <p>Enter or paste your text below.</p>
            <textarea id="text-input" placeholder="Start typing here..."></textarea>
            <p id="word-count">Words: 0</p>
            <p id="character-count">Characters: 0</p>
            <p id="sentence-count">Sentences: 0</p>
            <p id="paragraph-count">Paragraphs: 0</p>
            <p id="reading-time">Reading time: 0 min</p>
        `;
    } else if (toolName === "Text Formatter") {
        toolContent.innerHTML = `
            <p>Enter your text below.</p>
            <textarea id="text-input" placeholder="Type or paste your text..."></textarea>

            <div class="formatter-buttons">
                <button id="uppercase">UPPERCASE</button>
                <button id="lowercase">lowercase</button>
                <button id="titlecase">Title Case</button>
                <button id="remove-spaces">Remove Extra Spaces</button>
                <button id="copy-text">Copy Text</button>
            </div>
        `;
    } else if (toolName === "Unit Converter"){
        toolContent.innerHTML = `
          <h3>Unit Converter</h3>

          <label for="conversion-type">Convert:</label>
          <select id="conversion-type">
             <option value="length">Length</option>
             <option value="weight">Weight</option>
             <option value="temperature">Temperature</option>
             <option value="time">Time</option>
          </select>

          <input type="number" id="convert-value" placeholder="Enter value">

          <label for="from-unit">From:</label>
          <select id="from-unit"></select>

          <label for="to-unit">To:</label>
          <select id="to-unit"></select>

          <button id="convert-button">Convert</button>
          <p id="convert-result"></p>
          `;
    } else if (toolName === "QR Code Generator"){
        toolContent.innerHTML = `
          <h3>QR Code Generator</h3>
          <p>Enter text or a website URL to generate a QR code.</p>
          
          <input type="text" id="qr-input" placeholder="Enter text or URL">
          <button id="generate-qr">Generate QR Code</button>
          
          <div id="qr-result"></div>
          <button id="download-qr" class = "hidden">Download PNG</button>
          `;
    }
    else {
        toolContent.innerHTML = `
         <h3>Find Percentage</h3>
    <input type="number" id="percent-value" placeholder="Percentage (%)">
    <input type="number" id="total-value" placeholder="Total value">
    <button id="calculate-percent">Calculate</button>
    <p id="percent-result"></p>

    <hr>

    <h3>Percentage Change</h3>
    <input type="number" id="old-value" placeholder="Original value">
    <input type="number" id="new-value" placeholder="New value">
    <button id="calculate-change">Calculate Change</button>
    <p id="change-result"></p>

    <hr>

    <h3>Discount Calculator</h3>
    <input type="number" id="price-value" placeholder="Original price">
    <input type="number" id="discount-value" placeholder="Discount (%)">
    <button id="calculate-discount">Calculate Discount</button>
    <p id="discount-result"></p>
`;
    }
       

    const textInput = document.getElementById("text-input");

    if (toolName === "Word Counter") {
        textInput.addEventListener("input", function() {
            const text = textInput.value;
            const trimmedText = text.trim();

            const words = trimmedText ? trimmedText.split(/\s+/).length : 0;
            const sentences = trimmedText
                ? trimmedText.split(/[.!?]+/).filter(s => s.trim()).length
                : 0;
            const paragraphs = trimmedText
                ? trimmedText.split(/\n\s*\n/).filter(p => p.trim()).length
                : 0;

            document.getElementById("word-count").textContent =
                `Words: ${words}`;

            document.getElementById("character-count").textContent =
                `Characters: ${text.length}`;

            document.getElementById("sentence-count").textContent =
                `Sentences: ${sentences}`;

            document.getElementById("paragraph-count").textContent =
                `Paragraphs: ${paragraphs}`;

            document.getElementById("reading-time").textContent =
                `Reading time: ${Math.ceil(words / 200)} min`;
        });
    }

    if (toolName === "Text Formatter") {
        document.getElementById("uppercase").addEventListener("click", function() {
            textInput.value = textInput.value.toUpperCase();
        });

        document.getElementById("lowercase").addEventListener("click", function() {
            textInput.value = textInput.value.toLowerCase();
        });

        document.getElementById("titlecase").addEventListener("click", function() {
            textInput.value = textInput.value.toLowerCase().replace(/\b\w/g, function(char) {
                return char.toUpperCase();
            });
        });

        document.getElementById("remove-spaces").addEventListener("click", function() {
            textInput.value = textInput.value.trim().replace(/\s+/g, " ");
        });

        document.getElementById("copy-text").addEventListener("click", async function() {
            try {
                await navigator.clipboard.writeText(textInput.value);
                alert("Text copied!");
            } catch (error) {
                alert("Copy failed. Try using Live Server.");
            }
        });
    }

    if (toolName === "Percentage Calculator") {
        document.getElementById("calculate-percent").addEventListener("click", function() {
            const percent = Number(document.getElementById("percent-value").value);
            const total = Number(document.getElementById("total-value").value);

            if(document.getElementById("percent-value").value === "" ||
               document.getElementById("total-value").value === ""){
                alert("Please enter both values.");
                return;
               }

                document.getElementById("percent-result").textContent =
            `${percent}% of ${total} = ${(percent / 100 * total).toFixed(2)}`;
    });

    document.getElementById("calculate-change").addEventListener("click", function() {
        const oldValue = Number(document.getElementById("old-value").value);
        const newValue = Number(document.getElementById("new-value").value);

        if (document.getElementById("old-value").value === "" ||
            document.getElementById("new-value").value === "" || oldValue === 0) {
            alert("Enter valid values. Original value cannot be zero.");
            return;
        }

        const change = ((newValue - oldValue) / Math.abs(oldValue)) * 100;
        const label = change > 0 ? "Increase" : change < 0 ? "Decrease" : "No change";

        document.getElementById("change-result").textContent =
            `${label}: ${Math.abs(change).toFixed(2)}%`;
    });

    document.getElementById("calculate-discount").addEventListener("click", function() {
        const price = Number(document.getElementById("price-value").value);
        const discount = Number(document.getElementById("discount-value").value);

        if (document.getElementById("price-value").value === "" ||
            document.getElementById("discount-value").value === "" ||
            price < 0 || discount < 0 || discount > 100) {
            alert("Enter a valid price and discount between 0 and 100.");
            return;
        }

        const saved = price * discount / 100;
        const finalPrice = price - saved;

        document.getElementById("discount-result").textContent =
            `You save ${saved.toFixed(2)}. Final price: ${finalPrice.toFixed(2)}`;
    });
    }

    if(toolName === "Unit Converter"){
        const conversionType = document.getElementById("conversion-type");
        const fromUnit = document.getElementById("from-unit");
        const toUnit = document.getElementById("to-unit");

        const units = {
            length: ["Meters","Kilometers","Centimeters","Miles","Feet","Inches"],
            weight: ["Kilograms", "Grams","Pounds", "Ounces"],
            temperature: ["Celsius", "Fahrenheit", "Kelvin"],
            time : ["Seconds", "Minutes", "Hours", "Days"]
        };

        function updateUnits() {
            fromUnit.innerHTML = "";
            toUnit.innerHTML = "";

            units[conversionType.value].forEach(function(unit) {
                fromUnit.add(new Option(unit,unit));
                toUnit.add(new Option(unit,unit));
            });
        }

        conversionType.addEventListener("change", updateUnits);
        updateUnits();

        document.getElementById("convert-button").addEventListener("click", function() {
            const valueText = document.getElementById("convert-value").value;
        const value = Number(valueText);
        const from = fromUnit.value;
        const to = toUnit.value;

        if (valueText.trim() === "" || !Number.isFinite(value)) {
            alert("Please enter a valid number.");
            return;
        }

        let result;

        if (conversionType.value === "temperature") {
            let celsius;

            if (from === "Celsius") celsius = value;
            if (from === "Fahrenheit") celsius = (value - 32) * 5 / 9;
            if (from === "Kelvin") celsius = value - 273.15;

            if (to === "Celsius") result = celsius;
            if (to === "Fahrenheit") result = celsius * 9 / 5 + 32;
            if (to === "Kelvin") result = celsius + 273.15;

            if (from === "Kelvin" && value < 0) {
                alert("Kelvin cannot be below zero.");
                return;
            }
        } else {
            const factors = {
                Meters: 1,
                Kilometers: 1000,
                Centimeters: 0.01,
                Miles: 1609.344,
                Feet: 0.3048,
                Inches: 0.0254,
                Kilograms: 1,
                Grams: 0.001,
                Pounds: 0.45359237,
                Ounces: 0.0283495,
                Seconds: 1,
                Minutes: 60,
                Hours: 3600,
                Days: 86400
            };

            result = value * factors[from] / factors[to];
        }

        document.getElementById("convert-result").textContent =
            `${value} ${from} = ${result.toFixed(4)} ${to}`;
        });
    }

    if (toolName === "QR Code Generator") {
        const qrInput = document.getElementById("qr-input");
        const qrResult = document.getElementById("qr-result");
        const downloadButton = document.getElementById("download-qr");

        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";

        script.onload = function() {
            document.getElementById("generate-qr").addEventListener("click", function() {
                const value = qrInput.value.trim();

                if(!value) {
                    alert("Please enter some text or a URL.");
                    return;
                }

                qrResult.innerHTML = "";
                new QRCode(qrResult, {
                    text: value,
                    width: 200,
                    height: 200
                });

                downloadButton.classList.remove("hidden");
            });

            downloadButton.addEventListener("click", function() {
                const canvas = qrResult.querySelector("canvas");
                const image = qrResult.querySelector("img");
                const source = canvas ? canvas.toDataURL("image/png") : image?.src;

                if (!source) {
                    alert("Generate a QR code first.");
                    return;
                }

                const link = document.createElement("a");
                link.href = source;
                link.download = "tinytiils-qr.png";
                link.click();
            });
        };

        script.oneerror = function() {
            alert("Could not load the QR library. Check your internet connection");
        };

        document.head.appendChild(script);
    }
}



document.getElementById("back-button").addEventListener("click", function() {
    toolWorkspace.classList.add("hidden");
    homePage.classList.remove("hidden");
    document.querySelector("header").classList.remove("hidden");
});
