export const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const month = (tomorrow.getMonth()+1).toString().padStart(2, '0');
    const day = tomorrow.getDate().toString().padStart(2, '0');
    const year = tomorrow.getFullYear();

    return `${month}/${day}/${year}`;

}