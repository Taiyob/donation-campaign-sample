import PropTypes from 'prop-types';

const Donation = ({donation}) => {
    const {image,title,category} = donation;
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full h-[80%] object-cover" src={image} alt="" />
                </a>
                <div className="ml-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{title}</p>
                </div>
        </div>
    );
};

Donation.propTypes = {
    donation: PropTypes.object,
}

export default Donation;