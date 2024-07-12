import PropTypes from 'prop-types';

export const ImgText_Banner = ({ bannerImg, text, underline_text }) => {
    return (
        <div className="image_text">
            <div className="background-img">
                <img src={bannerImg} alt="banner" />
                <p>{ text } <span>{ underline_text }</span></p>
            </div>
        </div>
    )
}

ImgText_Banner.propTypes = {
    bannerImg: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    underline_text: PropTypes.string.isRequired
};