const TwoSectionLayout = ({ top, bottom }) => (
    <div className="content">
        <div className="content__top">{top}</div>
        <div className="content__bottom">{bottom}</div>
    </div>
);

export default TwoSectionLayout;