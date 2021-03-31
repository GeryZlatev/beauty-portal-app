import style from ''
import {
FacebookShareButton,  
LinkedinShareButton, 
TwitterShareButton, 
InstapaperShareButton,
EmailShareButton,
FacebookIcon, 
LinkedinIcon, 
TwitterIcon, 
InstapaperIcon,
EmailIcon
} from 'react-share';

const Viral = () => {
    return (
    <div className={style["shared-wrapper"]}>
    <FacebookShareButton url={'https://www.facebook.com/'}>
                        <FacebookIcon size={20} round={true}/>
    </FacebookShareButton>
    <LinkedinShareButton url={ 'https://www.linkedin.com/'}>
                        <LinkedinIcon size={20} round={true}/>
    </LinkedinShareButton>
    <TwitterShareButton url={'https://twitter.com/'}>
                        <TwitterIcon size={20} round={true} style={{color: 'red'}}/>
    </TwitterShareButton>
    <InstapaperShareButton url={'https://www.instagram.com/'}>
                        <InstapaperIcon size={20} round={true} style={{color: 'red'}}/>
    </InstapaperShareButton>
    <EmailShareButton url={'https://www.instagram.com/'}>
                        <EmailIcon size={20} round={true} style={{color: 'red'}}/>
    </EmailShareButton>
    </div>
    )
}

export default Viral;