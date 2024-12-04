import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function compareDates(date = new Date()) {
    let currentDate = new Date();
    currentDate = currentDate.getTime();
    date = Date.parse(date);
    const differenceTime = Math.abs(currentDate - date);
    let verificationDifferenceTime;
    if (Math.floor(differenceTime / (1000 * 60 * 60 * 24 * 30 * 12)) > 0) {
        verificationDifferenceTime = Math.floor(differenceTime / (1000 * 60 * 60 * 24 * 30 * 12)) > 0
        return (verificationDifferenceTime == 1) ? `há: 1 ano atrás` : `há: ${verificationDifferenceTime} anos atrás`;
    }
    else if (Math.floor(differenceTime / (1000 * 60 * 60 * 24 * 30)) > 0) {
        verificationDifferenceTime = Math.floor(differenceTime / (1000 * 60 * 60 * 24 * 30));
        return (verificationDifferenceTime == 1) ? `há: 1 mês atrás` : `há: ${verificationDifferenceTime} meses atrás`;
    } else if (Math.floor(differenceTime / (1000 * 60 * 60 * 24)) > 0) {
        verificationDifferenceTime = Math.floor(differenceTime / (1000 * 60 * 60 * 24))
        return (verificationDifferenceTime == 1) ? `há: 1 dia atrás`: `há: ${verificationDifferenceTime} dias atrás`;
    } else if (Math.floor(differenceTime / (1000 * 60 * 60)) > 0) {
        verificationDifferenceTime = Math.floor(differenceTime / (1000 * 60 * 60));
        return (verificationDifferenceTime == 1) ? `há: 1 hora atrás` : `há: ${verificationDifferenceTime} horas atrás`;
    } else {
        verificationDifferenceTime = Math.floor(differenceTime / (1000 * 60));
        return (verificationDifferenceTime >= 10) ? `: Agora` : `há: ${verificationDifferenceTime} minutos atrás`;
    };
};

export function formatDate(date) {
    return format(new Date(date), "dd/MM/yyyy", { locale: ptBR });
}