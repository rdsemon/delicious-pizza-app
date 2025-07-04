function sanitize(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;

  const clean = Array.isArray(obj) ? [] : {};

  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      clean[index] = sanitize(item);
    });
  } else {
    Object.keys(obj).forEach((key) => {
      if (!key.startsWith('$') && !key.includes('.')) {
        clean[key] =
          typeof obj[key] === 'object' ? sanitize(obj[key]) : obj[key];
      }
    });
  }

  return clean;
}

module.exports = sanitize;
