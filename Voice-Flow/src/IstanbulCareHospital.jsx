export default function IstanbulCareHospital() {
  return (
    <div style={{ backgroundColor: "#f4f5fb" }}>
      {/* NAVBAR */}
      <nav
        className="navbar navbar-dark navbar-expand-lg"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span>❤️</span>
            Istanbul Care Hospital
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#departments">
                  Departments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#international">
                  International Patients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#appointment">
                  Appointment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="hero"
        style={{
          padding: "70px 0 60px",
          background:
            "radial-gradient(circle at top left, #2563eb 0, #0f172a 45%, #020617 100%)",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div
                className="hero-badge mb-2"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(15, 23, 42, 0.6)",
                  borderRadius: "999px",
                  padding: "4px 12px",
                  fontSize: "0.8rem",
                }}
              >
                <span>🏥 International hospital in Istanbul</span>
                <span
                  style={{
                    backgroundColor: "#eef2ff",
                    color: "#4338ca",
                    borderRadius: "999px",
                    padding: "3px 9px",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  EN · RU · AR
                </span>
              </div>
              <h1
                className="hero-title"
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 650,
                  marginBottom: 10,
                }}
              >
                Modern Turkish clinic
                <br />
                for patients from all over the world
              </h1>
              <p
                className="hero-subtitle mb-4"
                style={{ fontSize: "1rem", opacity: 0.9, maxWidth: 520 }}
              >
                Istanbul Care Hospital specializes in cardiology,
                transplantation, oncology and plastic surgery. Full support:
                from airport transfer to post-treatment recovery.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#appointment" className="btn btn-primary px-4">
                  Book a consultation
                </a>
                <a href="#international" className="btn btn-outline-light px-4">
                  Program for international patients
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="hero-card"
                style={{
                  background: "rgba(15, 23, 42, 0.92)",
                  borderRadius: 20,
                  padding: "22px 22px 16px",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.9)",
                }}
              >
                <h5 className="fw-semibold mb-2">Quick facts</h5>
                <HeroInfoItem
                  label="Location:"
                  value="Istanbul, Başakşehir district"
                />
                <HeroInfoItem
                  label="Key specialties:"
                  value="cardiology, oncology, aesthetics"
                />
                <HeroInfoItem
                  label="Airport–hospital:"
                  value="≈ 25 minutes by transfer"
                />
                <HeroInfoItem label="Inpatient department:" value="24/7" />
                <hr className="border-secondary border-opacity-25 my-3" />
                <p className="small mb-2" style={{ color: "#e5e7eb" }}>
                  📞 International patients hotline (WhatsApp):
                  <br />
                  <strong>+90 (000) 000 00 00</strong>
                </p>
                <p className="small mb-0" style={{ color: "#9ca3af" }}>
                  *All information on this page is for demonstration purposes
                  only and does not constitute real medical services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title" style={sectionTitleStyle}>
                Why patients choose Turkey
              </h2>
              <p className="section-subtitle" style={sectionSubtitleStyle}>
                High medical standards, modern equipment and competitive prices
                make Turkey one of the leading destinations for medical tourism.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  • European treatment protocols and international clinic
                  accreditations.
                </li>
                <li className="mb-2">
                  • Russian and English speaking coordinators at every step of
                  treatment.
                </li>
                <li className="mb-2">
                  • Package programs “treatment + vacation” in Istanbul, Antalya
                  and other cities.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <FeatureCard
                  badge="Cardiology"
                  title="Minimally invasive heart surgery"
                  text="Modern techniques for stenting, bypass surgery and treatment of rhythm disorders."
                />
                <FeatureCard
                  badge="Oncology"
                  title="Personalized cancer care"
                  text="Tumor boards, targeted therapy and up-to-date chemotherapy protocols."
                />
                <FeatureCard
                  badge="Plastic surgery"
                  title="Aesthetic & reconstructive"
                  text="Rhinoplasty, mammoplasty, liposuction and comprehensive makeover programs."
                />
                <FeatureCard
                  badge="Check-up"
                  title="Full body check-up programs"
                  text="1–3 day check-ups: lab tests, ultrasound, CT and consultations with specialists."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section id="departments" className="py-5 bg-white">
        <div className="container">
          <h2 className="section-title text-center" style={sectionTitleStyle}>
            Main departments
          </h2>
          <p
            className="section-subtitle text-center"
            style={sectionSubtitleStyle}
          >
            The list below is illustrative and used as a design example.
          </p>

          <div className="row g-3">
            <DepartmentCard
              icon="❤️"
              title="Cardiology & Cardiac Surgery"
              text="Diagnosis and treatment of coronary artery disease, heart defects and rhythm disorders. Minimally invasive and endovascular procedures."
            />
            <DepartmentCard
              icon="🧬"
              title="Comprehensive Oncology Center"
              text="Treatment of tumors of different locations, radiotherapy, targeted and immunotherapy approaches, genetic testing."
            />
            <DepartmentCard
              icon="✨"
              title="Plastic & Reconstructive Surgery"
              text="Aesthetic operations, reconstruction after trauma or oncological surgery, anti-aging programs."
            />
          </div>
        </div>
      </section>

      {/* INTERNATIONAL PATIENTS */}
      <section id="international" className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title" style={sectionTitleStyle}>
                Service for international patients
              </h2>
              <p className="section-subtitle" style={sectionSubtitleStyle}>
                Our international team guides you from the first inquiry until
                you safely return home.
              </p>
              <ul className="list-unstyled mb-3">
                <li className="mb-2">
                  • Free preliminary review of medical documents (reports, test
                  results).
                </li>
                <li className="mb-2">
                  • Assistance in choosing the right doctor and forming a
                  treatment plan.
                </li>
                <li className="mb-2">
                  • Organization of airport transfer, hotel accommodation and
                  interpreter services.
                </li>
                <li className="mb-2">
                  • Follow-up care and online consultations with your doctor
                  after you return home.
                </li>
              </ul>
              <p className="small text-muted mb-0">
                Fill in the appointment form or contact us via WhatsApp — we
                will prepare a personalized treatment offer in Turkey.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="card" style={featureCardStyle}>
                <div className="card-body">
                  <h5 className="mb-3">International coordination team</h5>
                  <div className="d-flex align-items-center mb-3">
                    <div style={doctorAvatarStyle}>BE</div>
                    <div>
                      <div className="fw-semibold">Begimai Eshbaeva</div>
                      <div className="small text-muted">
                        International coordinator · EN / RU / TR
                      </div>
                    </div>
                  </div>
                  <p className="small text-muted mb-2">
                    “Our goal is to make treatment abroad as clear and
                    comfortable as possible. We help with documents, flights,
                    accommodation and communication with doctors.”
                  </p>
                  <hr />
                  <p className="small mb-1">
                    📱 WhatsApp for requests: <strong>+90 542 234 92 84</strong>
                  </p>
                  <p className="small mb-0">
                    ✉ International patients department:{" "}
                    <strong>int@istanbulcare.fake</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT FORM */}
      <section id="appointment" className="py-5 bg-white">
        <div className="container">
          <h2 className="section-title text-center" style={sectionTitleStyle}>
            Online consultation request
          </h2>
          <p
            className="section-subtitle text-center"
            style={sectionSubtitleStyle}
          >
            This form is a demo. Use it as a template and connect your backend
            or CRM.
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card" style={appointmentCardStyle}>
                <div className="card-body p-4">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Demo only: form data is not actually submitted.");
                    }}
                  >
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">
                          Full name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. Anna Petrova"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">
                          Contact phone (WhatsApp)
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="+7 ___ ___-__-__"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">
                          Specialty
                        </label>
                        <select className="form-select">
                          <option>Cardiology</option>
                          <option>Oncology</option>
                          <option>Plastic surgery</option>
                          <option>Check-up</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">
                          Preferred contact method
                        </label>
                        <select className="form-select">
                          <option>WhatsApp</option>
                          <option>Phone call</option>
                          <option>E-mail</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">
                          Briefly describe your case
                        </label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Diagnosis, symptoms, previous treatment, desired dates."
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mt-4">
                      <button type="submit" className="btn btn-primary px-4">
                        Send request (demo)
                      </button>
                      <p className="small text-muted mb-0">
                        By clicking the button, you agree to the processing of
                        personal data. In this demo version, data is not
                        actually transferred anywhere.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-5">
        <div className="container">
          <h2 className="section-title text-center" style={sectionTitleStyle}>
            Contacts
          </h2>
          <p
            className="section-subtitle text-center"
            style={sectionSubtitleStyle}
          >
            Example data for demonstration. Replace with real contact details of
            your clinic.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h6 className="fw-semibold mb-2">Clinic address</h6>
              <p className="mb-2">
                Istanbul Care Hospital
                <br />
                Başakşehir, Istanbul, Turkey
              </p>
              <h6 className="fw-semibold mt-3 mb-2">Phone numbers</h6>
              <p className="mb-1">Main: +90 (000) 000 00 00</p>
              <p className="mb-1">
                WhatsApp (international patients): +90 (000) 000 00 00
              </p>
              <h6 className="fw-semibold mt-3 mb-2">E-mail</h6>
              <p className="mb-1">info@istanbulcare.fake</p>
              <p className="mb-0">international@istanbulcare.fake</p>
            </div>
            <div className="col-md-6">
              <h6 className="fw-semibold mb-2">Map (placeholder)</h6>
              <div
                className="rounded-4 border bg-light d-flex align-items-center justify-content-center text-muted"
                style={{ height: 230 }}
              >
                <iframe
                  title="Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24074.81993899513!2d28.98889022858886!3d41.03942006641303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7761a3b7de3%3A0xdcd33e38cf3b830b!2z0JTQvtC70LzQsNCx0LDRhdGH0LU!5e0!3m2!1sru!2str!4v1765119991005!5m2!1sru!2str"
                  width="100%"
                  height="230"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#020617",
          color: "#9ca3af",
          fontSize: "0.85rem",
        }}
      >
        <div className="container text-center py-3">
          <p className="mb-1">
            © 2025 Istanbul Care Hospital (demo). All data is fictional.
          </p>
          <p className="mb-0">
            This site is created as a design example for a medical clinic in
            Turkey and does not belong to a real medical institution.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Small subcomponents & styles ---------- */

function HeroInfoItem({ label, value }) {
  return (
    <div
      className="hero-info-item"
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "0.9rem",
        marginBottom: 6,
        color: "#cbd5f5",
      }}
    >
      <span style={{ opacity: 0.75 }}>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function FeatureCard({ badge, title, text }) {
  return (
    <div className="col-sm-6">
      <div className="card h-100" style={featureCardStyle}>
        <div className="card-body">
          <span
            className="d-inline-block mb-2"
            style={{
              backgroundColor: "#eef2ff",
              color: "#4338ca",
              borderRadius: "999px",
              padding: "3px 9px",
              fontSize: "0.75rem",
              fontWeight: 500,
            }}
          >
            {badge}
          </span>
          <p className="mb-2 fw-semibold">{title}</p>
          <p className="mb-0 small text-muted">{text}</p>
        </div>
      </div>
    </div>
  );
}

function DepartmentCard({ icon, title, text }) {
  return (
    <div className="col-md-4">
      <div className="card h-100" style={featureCardStyle}>
        <div className="card-body">
          <div
            className="mb-2"
            style={{
              width: 34,
              height: 34,
              borderRadius: "999px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e0f2fe",
              color: "#0369a1",
              marginBottom: 8,
            }}
          >
            {icon}
          </div>
          <h5 className="card-title mb-1">{title}</h5>
          <p className="card-text small text-muted">{text}</p>
        </div>
      </div>
    </div>
  );
}

/* Styles extracted as JS objects */

const sectionTitleStyle = {
  fontWeight: 600,
  fontSize: "1.6rem",
  marginBottom: "0.25rem",
  color: "#0f172a",
};

const sectionSubtitleStyle = {
  color: "#6b7280",
  fontSize: "0.95rem",
  marginBottom: "1.25rem",
};

const featureCardStyle = {
  borderRadius: 14,
  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
  border: "none",
};

const appointmentCardStyle = {
  borderRadius: 20,
  boxShadow: "0 14px 40px rgba(15, 23, 42, 0.16)",
  border: "none",
};

const doctorAvatarStyle = {
  width: 48,
  height: 48,
  borderRadius: "999px",
  background: "linear-gradient(135deg, #38bdf8, #6366f1)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: 600,
  marginRight: 10,
};
