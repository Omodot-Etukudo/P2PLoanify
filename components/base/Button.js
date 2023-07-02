
export default function Button({status, onClick}) {

    let color;
    let text;
    switch (status) {
        case 'Delete':
        color = 'px-6 py-3 rounded-full text-sm text-red-400 border border-red-400 bg-main transition-all duration-200';
        text = "Delete"
        break;
        case 'Repay':
        color = 'px-6 py-3 rounded-full text-sm text-primary bg-main border border-primary';
        text="Repay"
        break;
        case 'Empty':
        color = 'hidden';
        text = "None"
        break;
        default:
        color = 'px-6 py-3 rounded-full text-sm text-main bg-primary hover:bg-green-400 transition-all duration-200';
        text = "Get Loan"
    }
    
    
    return (
        <>
          {status && (
            <button onClick={onClick} className={color}>
              {text}
            </button>
            
          )}   
        </>
      );
}  