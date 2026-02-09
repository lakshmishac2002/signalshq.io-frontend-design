import './ProductDemo.css';

export default function ProductDemo() {
  return (
    <section className="product-demo">
      <div className="product-demo-bg">
        <div className="demo-device">
          <div className="demo-device-frame">
            <div className="demo-device-notch" />
            <div className="demo-device-screen">
              <div className="demo-screen-content">
                <div className="demo-progress-bar" />
                <p className="demo-analyzing-text">Analyzing...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
