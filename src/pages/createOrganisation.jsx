import React, {  useState } from 'react'
import './createOrganisation.css'
import axios from 'axios'
import StarsCanvas from '../components/canvas/Stars';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
function CreateOrganisation() {

    const [organisationName,setOrganisationName]=useState("");
    const [founderFirst,setFounderFirst]=useState("");
    const [founderLast,setFounderLast]=useState("");
    const [walletAddress,setWalletAddress]=useState("");
    const [bannerUrl,setBannerUrl]=useState("");
    const [nfts,setNfts]=useState([{
        nftName:"",
        nftDecription:"",
        nftUrl:""
    }]);


    async function handleSubmit(ev){
        ev.preventDefault()
        try{
            const userName=await axios.post('/orgs/add',{organisationName,founderFirst,founderLast,walletAddress,bannerUrl})
            alert('Created a New Organisation')
            // setRedirect(true)

        }catch(e){
            alert('Creation failed')
        }
    }

    const [nftNumber,setNftNumber]=useState(1);
    const generate=(e)=>{
        e.preventDefault();
        setNftNumber(nftNumber+1);
    }
    

    
    return (
<div>
<StarsCanvas/>
            <Link to='/'>
                <img src={logo} className="home_logo animate__animated animate__fadeIn" alt="" />
            </Link>
    <div className='formOrganisation'>

        <div class="OrgContainer animate_animated animate_fadeIn">
            <div class="box">
                <div class="content">
                    <h2>Create a New Organisation</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder={'Name of the Organistion'}
                            value={organisationName}
                            onChange={function(e){
                                setOrganisationName(e.target.value)
                            }}
                        />
                        <input
                            type="text"
                            placeholder={'First Name of the Founder'}
                            value={founderFirst}
                            onChange={function(e){
                                setFounderFirst(e.target.value)
                            }}
                        />
                        <input
                            type="text"
                            placeholder={'Last Name of the Founder'}
                            value={founderLast}
                            onChange={function(e){
                                setFounderLast(e.target.value)
                            }}
                        />
                        <input
                            type="text"
                            placeholder={'Wallet Address'}
                            value={walletAddress}
                            onChange={function(e){
                                setWalletAddress(e.target.value)
                            }}
                        />
                        <input
                            type="text"
                            placeholder={'URL for the Organisation banner'}
                            value={bannerUrl}
                            onChange={function(e){
                                setBannerUrl(e.target.value)
                            }}
                        />
                        <h2>Add your NFT's</h2>
                        {[...Array(nftNumber)].map((e, i) => {
                            return(
                                <div>
                                    <input
                                        type="text"
                                        placeholder={'Nft name'}

                                    />
                                    <input
                                        type="text"
                                        placeholder={'Description About NFT'}
                                    />
                
                                    <input
                                        type="text"
                                        placeholder={'URL of NFT'}
                                    />
                                </div>
                            )
                        })}
                        <button className='newNft' onClick={generate}>
                            + ADD NEW NFT
                        </button>
                        <div > 
                        
                            
                        <button type='submit' className='login'>Create</button>
                        </div>
                    </form>
                </div>
            </div>

    </div>
        </div>
            
</div>


    )
}

export default CreateOrganisation