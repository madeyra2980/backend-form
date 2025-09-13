const File = require("../models/File");

const uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "Файл не загружен" });
        }

        const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        console.log("req.file:", req.file);

        // Сохраняем в MongoDB
        const newFile = new File({
            filename: req.file.filename,
            url: fileUrl,
        });

        await newFile.save();

        res.json({
            status: "ok",
            file: {
                id: newFile._id,
                filename: newFile.filename,
                url: newFile.url,
            },
        });
    } catch (error) {
        console.error("Ошибка при загрузке:", error.message);
        res.status(500).json({ error: "Ошибка сервера" });
    }
};

module.exports = { uploadFile };
