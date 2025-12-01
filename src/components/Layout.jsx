const TwoSectionLayout = ({ top, bottom }) => (
    <div className="main-content-area">
        <div className="section-top">{top}</div>
        <div className="section-bottom">{bottom}</div>
    </div>
);

export default TwoSectionLayout;