import "./LogIn.css";
export function LogIn() {
  return (
    <div
      className="app-wrapper d-flex align-items-center justify-content-center p-3"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="app-card bg-white p-4"
        style={{
          width: "100%",
          maxWidth: "640px",
          height: "auto",
          borderRadius: "24px",
          boxShadow: "0 20px 45px rgba(15, 23, 42, 0.15)",
        }}
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-semibold mb-1">Social Post Generator</h2>
          <p className="text-muted mb-0">
            Create Twitter, Instagram, or LinkedIn posts from a single idea.
          </p>
        </div>

        {/* Form */}
        <form>
          {/* Channel */}
          <div className="mb-3">
            <label className="fw-medium mb-1" style={{ fontSize: ".9rem" }}>
              Channel
            </label>
            <select className="form-select">
              <option>Twitter</option>
              <option>Instagram</option>
              <option>LinkedIn</option>
            </select>
          </div>

          {/* Topic */}
          <div className="mb-3">
            <label className="fw-medium mb-1" style={{ fontSize: ".9rem" }}>
              Topic
            </label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="e.g. Why founders should launch MVPs before the market gets crowded"
            />
          </div>

          {/* Tone */}
          <div className="mb-4">
            <label className="fw-medium mb-1" style={{ fontSize: ".9rem" }}>
              Tone{" "}
              <span className="text-muted" style={{ fontSize: ".8rem" }}>
                (optional)
              </span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. casual, bold, professional, friendly"
            />
          </div>

          {/* Кнопка */}
          <div className="d-grid mb-4">
            <button className="btn btn-primary py-2 fw-semibold" type="button">
              Generate post
            </button>
          </div>

          {/* Generated content */}
          <div>
            <label className="fw-medium mb-1" style={{ fontSize: ".9rem" }}>
              Generated content
            </label>
            <textarea
              className="form-control"
              style={{ minHeight: "140px" }}
              placeholder="Your generated post will appear here."
            />
          </div>
        </form>
      </div>
    </div>
  );
}
