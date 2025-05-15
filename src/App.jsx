import React from "react";

function Table({ formData }) {
  return (
    <>
      <h2>Data Hasil Input</h2>
      <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Jenis Kelamin</th>
            <th>Perokok</th>
            <th>Rokok</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.smoker}</td>
              <td>{item.cigarettes?.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function App() {
  const [formData, setFormData] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const fullName = form.fullName.value;
    const umur = form.umur.value;
    const gender = form.gender.value;
    const perokok = form.perokok.value;
    const checkedRokok = Array.from(form.rokok)
      .filter((input) => input.checked)
      .map((input) => input.value);

    const newData = {
      name: fullName,
      age: umur,
      gender: gender === "men" ? "Laki-laki" : "Perempuan",
      smoker: perokok === "Yes" ? "Ya" : "Tidak",
      cigarettes: checkedRokok,
    };

    setFormData((prev) => [...prev, newData]);
    form.reset();
  };

  return (
    <div cla>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Siapa nama anda?</label>
          <br />
          <input type="text" name="fullName" id="fullName" required />
        </div>
        <div>
          <label htmlFor="umur">Berapa umur anda?</label>
          <br />
          <input type="text" name="umur" id="umur" required />
        </div>
        <div>
          <label htmlFor="gender">Apa jenis kelamin anda?</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="men"
            id="gender-1"
            required
          />
          <label htmlFor="gender-1">Laki-Laki</label>

          <input
            type="radio"
            name="gender"
            value="women"
            id="gender-2"
            required
          />
          <label htmlFor="gender-2">Perempuan</label>
        </div>

        <div>
          <label htmlFor="perokok">Apakah anda perokok?</label>
          <br />
          <input
            type="radio"
            name="perokok"
            value="Yes"
            id="perokok-1"
            required
          />
          <label htmlFor="perokok-1">Ya</label>

          <input
            type="radio"
            name="perokok"
            value="No"
            id="perokok-2"
            required
          />
          <label htmlFor="perokok-2">Tidak</label>
        </div>

        <div>
          <label>Jika anda perokok, rokok apa yang anda pernah coba?</label>

          <div>
            <input
              type="checkbox"
              name="rokok"
              value="Gudang Garam Filter"
              id="rokok-1"
            />
            <label htmlFor="rokok-1">Gudang Garam Filter</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="rokok"
              value="Lucky Strike"
              id="rokok-2"
            />
            <label htmlFor="rokok-2">Lucky Strike</label>
          </div>

          <div>
            <input type="checkbox" name="rokok" value="Marlboro" id="rokok-3" />
            <label htmlFor="rokok-3">Marlboro</label>
          </div>

          <div>
            <input type="checkbox" name="rokok" value="Esse" id="rokok-4" />
            <label htmlFor="rokok-4">Esse</label>
          </div>
        </div>

        <button type="submit">Simpan</button>
      </form>
      {formData.length > 0 && <Table formData={formData} />}
    </div>
  );
}

export default App;
