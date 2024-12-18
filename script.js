document.addEventListener("DOMContentLoaded", function() {
    const studentRegisterBtn = document.getElementById("studentRegisterBtn");
    const schoolRegisterBtn = document.getElementById("schoolRegisterBtn");
    const wasteEntryBtn = document.getElementById("wasteEntryBtn");
    const viewDataBtn = document.getElementById("viewDataBtn");
    const infoBtn = document.getElementById("infoBtn");
    const content = document.getElementById("content");

    // Öğrenci Kaydı
    studentRegisterBtn.addEventListener("click", function() {
        content.innerHTML = `
            <h2>Öğrenci Kaydı</h2>
            <form>
                <label for="studentName">İsim:</label>
                <input type="text" id="studentName" name="studentName" required><br><br>
                <label for="studentSurname">Soyisim:</label>
                <input type="text" id="studentSurname" name="studentSurname" required><br><br>
                <label for="studentEmail">E-posta:</label>
                <input type="email" id="studentEmail" name="studentEmail" required><br><br>
                <label for="studentSchool">Okul:</label>
                <input type="text" id="studentSchool" name="studentSchool" required><br><br>
                <button type="submit">Kaydet</button>
            </form>
        `;
        content.classList.add("active");
    });

    // Okul Kaydı
    schoolRegisterBtn.addEventListener("click", function() {
        content.innerHTML = `
            <h2>Okul Kaydı</h2>
            <form>
                <label for="schoolName">Okul Adı:</label>
                <input type="text" id="schoolName" name="schoolName" required><br><br>
                <label for="schoolEmail">Okul E-posta:</label>
                <input type="email" id="schoolEmail" name="schoolEmail" required><br><br>
                <label for="schoolLocation">İl ve İlçe:</label>
                <input type="text" id="schoolLocation" name="schoolLocation" required><br><br>
                <button type="submit">Kaydet</button>
            </form>
        `;
        content.classList.add("active");
    });

    // Atık Girişi
    wasteEntryBtn.addEventListener("click", function() {
        content.innerHTML = `
            <h2>Atık Girişi</h2>
            <form>
                <label for="wasteType">Atık Türü:</label>
                <select id="wasteType" name="wasteType" required>
                    <option value="paper">Kağıt</option>
                    <option value="plastic">Plastik</option>
                    <option value="metal">Metal</option>
                    <option value="electronic">Elektronik</option>
                </select><br><br>
                <label for="wasteAmount">Miktar (kg):</label>
                <input type="number" id="wasteAmount" name="wasteAmount" required><br><br>
                <label for="wasteCollectedBy">Atığı Kim Aldı:</label>
                <input type="text" id="wasteCollectedBy" name="wasteCollectedBy" required><br><br>
                <button type="submit">Giriş Yap</button>
            </form>
        `;
        content.classList.add("active");
    });

    // Veri Görüntüle
    viewDataBtn.addEventListener("click", function() {
        content.innerHTML = `
            <h2>Veri Görüntüle</h2>
            <p>Bu bölümde daha önce girilen verileri görebilirsiniz.</p>
        `;
        content.classList.add("active");
    });

    // Bilgilendirme
    infoBtn.addEventListener("click", function() {
        content.innerHTML = `
            <h2>Bilgilendirme</h2>
            <p>Bu sistem, atıkların geri dönüşümü ve takibini sağlar. Öğrenciler ve okullar, çevreye duyarlı bir şekilde geri dönüşüm yaparak kredi kazanabilirler.</p>
            <p>Öğrenciler, okullarından atık türlerini sisteme kaydederek çevreyi koruyabilirler.</p>
        `;
        content.classList.add("active");
    });
});
