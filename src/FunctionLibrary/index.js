// hexToRGB('#FF0000', 0.5);
export function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

export function setColor(tag) {
  let background
  switch (tag) {
    case "Супермаркеты":
      background = "#FFEA00";
      break;
    case "Продукты":
      background = "#FFEA00";
      break;
    case "Транспорт":
      background = "#F4511E";
      break;
    case "Красота и здоровье":
      background = "#B388FF";
      break;
    case "Медицина":
      background = "#B388FF";
      break;
    case "Одежда и аксессуары":
      background = "#64B5F6";
      break;
    case "ЖКХ":
      background = "#6D4C41";
      break;
    case "Рестораны и кафе":
      background = "#FFAB00";
      break;
    case "Отдых и развлечения":
      background = "#00C853";
      break;
    case "Развлечения":
      background = "#00C853";
      break;
    case "Переводы и снятие наличных":
      background = "#388E3C";
      break;
    case "Перевод":
      background = "#388E3C";
      break;
    case "Связь":
      background = "#AD1457";
      break;
    case "Связь и коммуникации":
      background = "#AD1457";
      break;
    case "Дом и ремонт":
      background = "#283593";
      break;
    case "Образование":
      background = "#00BFA5";
      break;

    default:
      background =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      break;
  }
  return background;
}
