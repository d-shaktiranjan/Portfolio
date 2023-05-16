import '../style/home.css';
import { Link } from 'react-router-dom';
import myImage from '../static/me.png';

export const Home = () => {
    // env variables
    const showCompanySection = import.meta.env.VITE_SHOW_COMPANY_SECTION === "true" ? true : false;
    const companyName = import.meta.env.VITE_COMPANY_NAME;
    const companyUrl = import.meta.env.VITE_COMPANY_URL;
    const roleInCompany = import.meta.env.VITE_COMPANY_ROLE;

    document.title = "Shakti | Backend Developer";
    return (
        <div className='flex container min-height home-section'>
            <div className="flex home">
                Hey, This is
                <span className='main-heading block accent'>Shakti Ranjan Debata.</span>
                <span className='main-heading block'>I build Backend things.</span>
                <span>
                    I'm a Computer Science Engineering student passout from CV Raman Global University.
                </span>
                {showCompanySection && <span>
                    Currently working on <a href={companyUrl} target='__blank' className='accent'>{companyName} </a>
                    as a {roleInCompany}.
                </span>}
                <Link to="/skills" className='primary-btn block accent'>Explore Skills <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="home-image">
                <img src={myImage} className="my-image" alt="" />
            </div>
        </div>
    )
}
