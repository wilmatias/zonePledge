export const convertTwoDecimal = (value: number | string) => {
    let numberValue: number;

    if (typeof value === 'string') {
        numberValue = parseFloat(value);
    } else {
        numberValue = value;
    }
    
    return numberValue.toFixed(2);
}

export const copyToClipboard = (text: string) => {
    try {
        navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy text to clipboard', err);
        throw err;
    }
};

export const formatDate = (text: string) => {
    const date = new Date(text);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
}

export const formatTime = (time: string) => {
    const date = new Date(time);
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
};

export const truncateDecimals = (value: number, decimalPlaces: number): number => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.floor(value * factor) / factor;
};

export const convertToDecimal = (value: any) => {
    return (value / 100).toFixed(2);
}

export const formatDateWithTime = (dateString: string) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = `${month}-${day}-${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return `${formattedDate} ${formattedTime}`;
}

export const convertSecods = (seconds: number) => {
    if (seconds < 60) {
        return `${seconds}s`;
    } else if (seconds < 3600) { // Less than an hour
        const minutes = Math.floor(seconds / 60);
        return `${minutes}min`;
    } else if (seconds < 86400) { // Less than a day
        const hours = Math.floor(seconds / 3600);
        return `${hours}hour`;
    } else { // More than a day
        const days = Math.floor(seconds / 86400);
        return `${days}day`;
    }
}

export const getDate = () => {
    var dat = new Date();
    var year = dat.getFullYear();
    var mon = (dat.getMonth() + 1) < 10 ? "0" + (dat.getMonth() + 1) : dat.getMonth() + 1;
    var data = dat.getDate() < 10 ? "0" + (dat.getDate()) : dat.getDate();
    var hour = dat.getHours() < 10 ? "0" + (dat.getHours()) : dat.getHours();
    var min = dat.getMinutes() < 10 ? "0" + (dat.getMinutes()) : dat.getMinutes();
    var seon = dat.getSeconds() < 10 ? "0" + (dat.getSeconds()) : dat.getSeconds();

    var newDate = year + "-" + mon + "-" + data + " " + hour + ":" + min + ":" + seon;
    return newDate;
};

export const maskAddress = (address: any) => {
    if (address.length < 10) {
        return address;
    }

    return `${address.slice(0, 4)}*****${address.slice(-4)}`;
}