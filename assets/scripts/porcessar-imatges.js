const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../img');
const outputDir = path.join(__dirname, '../img/redimensionades');

const maxWidth = 1000;

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error llegint la carpeta:', err);
        return;
    }

    files.forEach((file) => {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
            const inputPath = path.join(inputDir, file);
            const outputPath = path.join(outputDir, file);

            sharp(inputPath)
                .metadata()
                .then(metadata => {
                    if (metadata.width > maxWidth) {
                        
                        return sharp(inputPath)
                            .resize({ width: maxWidth })
                            .toFile(outputPath)
                            .then(() => {
                                console.log(`Redimensionada: ${file}`);
                            });
                    } else {
                        fs.copyFileSync(inputPath, outputPath);
                        console.log(`Ja correcta: ${file}`);
                    }
                })
                .catch(err => {
                    console.error(`Error amb ${file}:`, err);
                });
        }
    });
});
