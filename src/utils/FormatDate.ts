export default function formatDate(dataString: string) {
    const months = [
        "Jan.", "Fev.", "Mar.", "Abr.", "Mai.", "Jun.",
        "Jul.", "Ago.", "Set.", "Out.", "Nov.", "Dez."
    ];

    try {
        const formattedDataString = dataString.replace(/z$/i, '');

        const date = new Date(formattedDataString);
        const nameMonths = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();

        if (isNaN(day) || isNaN(year)) {
            throw new Error("Formato de data inválido");
        };

        return `${nameMonths} ${day}, ${year}`;
    } catch (error) {
        console.error("Erro ao formatar a data:", error);

        return "Data indisponível.";
    }
};