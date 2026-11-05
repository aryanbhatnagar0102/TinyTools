
    
const tools = [
    {
        name: "Word Counter",
        description: "Count words, characters, sentences and reading time.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note-minus preview-icon"><path d="M15 3v5a1 1 0 0 0 1 1h5"/><path d="M21 14V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.35"/><path d="M21 18h-6"/></svg>`
    },
    {
        name: "Text Formatter",
        description: "Convert text case and remove extra spaces.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-sparkles preview-icon"><path d="M10 3H8"/><path d="m15.007 5.008 3.987 3.986"/><path d="M20 15v4"/><path d="M21.174 6.813a2.82 2.82 0 0 0-3.986-3.987L3.842 16.175a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="M22 17h-4"/><path d="M4 5v4"/><path d="M6 7H2"/><path d="M9 2v2"/></svg>`
    },
    {
        name: "Percentage Calculator",
        description: "Calculate percentages, discounts and percentage changes.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator preview-icon"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`
    },
    {
        name: "Unit Converter",
        description: "Convert length, weight, temperature and time.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-repeat preview-icon"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>`
    },
    {
        name: "QR Code Generator",
        description: "Generate QR codes for text and website links.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-qr-code preview-icon"><path d="M17 12v4a1 1 0 0 1-1 1h-4"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M17 8V7"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M7 17h.01"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect x="7" y="7" width="5" height="5" rx="1"/></svg>`
    },
    {
        name: "Password Generator",
        description: "Generate random passwords with custom options.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole preview-icon"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`
    },
    {
        name: "Stopwatch & Timer",
        description: "Track time with a stopwatch and countdown timer.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-timer-reset preview-icon"><path d="M10 2h4"/><path d="M12 14v-4"/><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/><path d="M9 17H4v5"/></svg>`
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
            toolName !== "QR Code Generator" && 
            toolName !== "Password Generator" && 
            toolName !== "Stopwatch & Timer") {
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
        } else if (toolName === "Password Generator") {
            toolContent.innerHTML = `
            <h3>Password Generator</h3>
            <p>Create a strong password</p>
            
            <label for="password-length">Password Length:</label>
            <input type= "number" id="password-length" value="16" min="8" max="64">
            
            <div>
                <label><input type="checkbox" id="include-upper" checked> Uppercase (A-Z)</label>
                <label><input type="checkbox" id="include-lower" checked> Lowercase (a-z)</label>
                <label><input type="checkbox" id="include-numbers" checked> Numbers (0-9)</label>
                <label><input type="checkbox" id="include-symbols" checked> Symbols (!@#)</label>
            </div>

            <button id="generate-password">Generate Password</button>
            <input type="text" id="password-result" readonly placeholder="Ypir password appears here">
            <button id="copy-password">Copy Password</button>
            <p id="password-message"></p>
            `;

        } else if (toolName === "Stopwatch & Timer") {
            toolContent.innerHTML = `
            <h3>Stopwatch</h3>
            <h2 id="stopwatch-display">00:00:00</h2>
            <button id="start-stopwatch">Start</button>
            <button id="pause-stopwatch">Pause</button>
            <button id="reset-stopwatch">Reset</button>

            <hr>

            <h3>Countdown Timer</h3>
            <input type="number" id="timer-minutes" placeholder="Minutes" min="0">
            <input type="number" id="timer-seconds" placeholder="Seconds" min="0" max="59">
            <h2 id="timer-display">00:00</h2>
            <button id="start-timer">Start Timer</button>
            <button id="pause-timer">Pause Timer</button>
            <button id="reset-timer">Reset Timer</button>
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

        if(toolName === "Password Generator") {
            document.getElementById("generate-password").addEventListener("click",function() {
                const length = Number(document.getElementById("password-length").value);
                const groups = [];

                if (document.getElementById("include-upper").checked) groups.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
                if (document.getElementById("include-lower").checked) groups.push("abcdefghijklmnopqrstuvwxyz");
                if (document.getElementById("include-numbers").checked) groups.push("0123456789");
                if (document.getElementById("include-symbols").checked) groups.push("!@#$%^&*()-_=+");

                const result = document.getElementById("password-result");
                const message = document.getElementById("password-message");

                if (!Number.isInteger(length) || length < 8 || length > 64){
                    alert("Choose a length between 8 and 64.");
                    return;
                }

                if(groups.length === 0){
                    alert("Select at least one character type,");
                    return;
                }

                const allCharacters = groups.join("");
                const password = [];
                
                function randomCharacter(characters) {
                    const index = crypto.getRandomValues(new Uint32Array(1))[0] % characters.length;
                    return characters[index];
                }

                groups.forEach(function(group) {
                password.push(randomCharacter(group));
            });

            while (password.length < length) {
                password.push(randomCharacter(allCharacters));
            }

            for (let i = password.length - 1; i > 0; i--) {
                const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
                [password[i], password[j]] = [password[j], password[i]];
            }

            result.value = password.join("");
            message.textContent = "Password generated successfully.";
        });

        document.getElementById("copy-password").addEventListener("click", async function() {
            const password = document.getElementById("password-result").value;

            if (!password) {
                alert("Generate a password first.");
                return;
            }

        try {
                await navigator.clipboard.writeText(password);
                document.getElementById("password-message").textContent = "Password copied!";
            } catch (error) {
                document.getElementById("password-message").textContent = "Copy failed. Try using Live Server.";
            }
            });
        }

        if(toolName === "Stopwatch & Timer") {
            let elapsed =0;
            let stopwatchInterval = null;
            let remaining = 0;
            let timerInterval = null;

            const stopwatchDisplay = document.getElementById("stopwatch-display");
            const timerDisplay = document.getElementById("timer-display");

            function formatTime(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;

            return [hours, minutes, secs]
                .map(value => String(value).padStart(2, "0"))
                .join(":");
            }

            function updateStopwatch() {
                stopwatchDisplay.textContent = formatTime(elapsed);
            }

            document.getElementById("start-stopwatch").addEventListener("click",function() {
                if (stopwatchInterval !== null) return;

                stopwatchInterval = setInterval(function() {
                    elapsed++;
                    updateStopwatch();
                },1000);
            });

            document.getElementById("pause-stopwatch").addEventListener("click", function() {
            clearInterval(stopwatchInterval);
            stopwatchInterval = null;
            });

            document.getElementById("reset-stopwatch").addEventListener("click", function() {
            clearInterval(stopwatchInterval);
            stopwatchInterval = null;
            elapsed = 0;
            updateStopwatch();
            });

            function updateTimer() {
                const minutes = Math.floor(remaining/60);
                const seconds = remaining % 60;

                timerDisplay.textContent =
                `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
            }  

            document.getElementById("start-timer").addEventListener("click",function() {
                if(timerInterval !== null) return;

                if(remaining === 0){
                    const minutesText = document.getElementById("timer-minutes").value;
                    const secondsText = document.getElementById("timer-seconds").value;

                    const minutes = Number(minutesText || 0);
                    const seconds = Number(secondsText || 0);

                    if (
                    minutesText.trim() === "" && secondsText.trim() === "" ||
                    !Number.isInteger(minutes) ||
                    !Number.isInteger(seconds) ||
                    minutes < 0 || seconds < 0 || seconds > 59 ||
                    minutes + seconds === 0
                ) {
                    alert("Enter a valid timer duration.");
                    return;
                }

                remaining = minutes * 60 + seconds;
                }

                updateTimer();

                timerInterval = setInterval(function() {
                    remaining--;
                    updateTimer();

                    if(remaining<= 0) {
                        clearInterval(timerInterval);
                        timerInterval = null;
                        alert("Timer finished.");
                    }
                },1000);
            });

            document.getElementById("pause-timer").addEventListener("click",function() {
                clearInterval(timerInterval);
                timerInterval = null;
            });

            document.getElementById("reset-timer").addEventListener("click",function() {
                clearInterval(timerInterval);
                timerInterval = null;
                remaining = 0;
                timerDisplay.textContent = "00:00";
            });

        }
    }



    document.getElementById("back-button").addEventListener("click", function() {
        toolWorkspace.classList.add("hidden");
        homePage.classList.remove("hidden");
        document.querySelector("header").classList.remove("hidden");
    });
