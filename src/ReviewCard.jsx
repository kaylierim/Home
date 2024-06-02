import React from "react";
import ReactHtmlParser from 'html-react-parser';
import X from "../../images/x.svg"


function ReviewCard(props) {
    const { id, img, title, author, content } = props;
    const truncatedContent = content && content.length > 100 ? content.substring(0, 150) + "..." : content;
    const [modalOpen, setModalOpen] = React.useState(false);

    function handleClick() {
        setModalOpen(!modalOpen);
    }

    function handleClose() {
        setModalOpen(false);
    }

    return (
        <>
            <div className="review-box" id={id} onClick={handleClick}>
                <div className="review-box-left">
                    <style>{`
                #${id}::before {
                    background-image: url(${img});
                }
            `}</style>
                    <img src={props.img} className="book-image" alt={title} />
                </div>

                <div className="review-box-right">
                    <h2 className="book-title right">{title}</h2>
                    <h3 className="book-author right">{author}</h3>
                    <div className="review-content right">{ReactHtmlParser(truncatedContent)}</div>
                </div>
            </div>

            {modalOpen && (<div className="modal-container" onClick={(e) => {
                if (e.target.className === "modal-container") {
                    handleClose();
                }
            }}>
                <div className="modal">
                    <img src={X} className="x-icon" alt="close" onClick={handleClose} height="15px"/>
                    <img className="modal-img" src={img} alt={title}/>
                    <h2 className="modal-title">{title}</h2>
                    <h3 className="modal-author">{author}</h3>
                    <div className="modal-content">{ReactHtmlParser(content)}</div>
                </div>
            </div>)}
        </>
    )
}

export default ReviewCard;