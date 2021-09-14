import React from "react";
import StyleModal from "./index.view";

const ToolModal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const formik = useFormik({
        initialValues: {
            ToolId: '',
            papercenter_endo: '',
            EndoBursBox: '',
            HF32MM1540_endo: '',
            cloth_endo: '',
            ColorBarbedbrodch_endo: '',
            Barbedbrodch_endo: '',
            HF23MM4580_endo: '',
            WATER_endo: '',
            ColorLentuloSpiral_endo: '',
            Lentulospiral_endo: '',
            HF25MM1540_endo: '',
            Examinationkit_endo: '',
            PROH21MM_endo: '',
            HF25MM4580_endo: '',
            Tripplesyringe_endo: '',
            PROH25MM_endo: '',
            WATER2o_endo: '',
            HGateDrillF_endo: '',
            NF21MM1540_endo: '',
            Mouthprop_endo: '',
            HGateDrillB_endo: '',
            NF21MM4560_endo: '',
            Syringe_endo: '',
            Syringe5ML_endo: '',
            NF25MM1540_endo: '',
            Cottonswab_endo: '',
            Needlewash2427_endo: '',
            NF25MM4560_endo: '',
            Airotor_endo: '',
            RootZx_endo: '',
            Contra_endo: '',
            Glasslab_endo: '',
            KF21MM840_endo: '',
            FileStand_endo: '',
            HighPowerSuction_endo: '',
            KF21MM4580_enod: '',
            NumberPlatePP_endo: '',
            PlatePP_endo: '',
            OCBOXSET_endo: '',
            KF25MM840_endo: '',
            RubberdamFlame_endo: '',
            FRCBOXSET_endo: '',
            KF25MM4580_endo: '',
            RubberdamSheet_endo: '',
            NumberCF21_endo: '',
            CF21_endo: '',
            KF30MM840_endo: '',
            NumberCLAMP_endo: '',
            CLAMP_endo: '',
            NumberCF25_endo: '',
            CF25_endo: '',
            KF30MM4580_endo: '',
            Examinationkit_n: '',
            COMPOSIT_n: '',
            RUBBERD_n: '',
            WATTERP_n: '',
            ANALGAM_n: '',
            CLAMPNO_n: '',
            CLAMPP_n: '',
            TRIPPLES_n: '',
            SETCOMPOSITSLOW_n: '',
            HSTELLSLOW_n: '',
            Centerpunchingfabric_n: '',
            SETCOMPOSITFAST_n: '',
            SETASTROPOL_n: '',
            Clothcover_n: '',
            PLSCOMPOSIT_n: '',
            IVORYTOFFMATRIX_n: '',
            UNC15P_n: '',
            SPOONEXCABIG_n: '',
            HIGHTPSUCTION_n: '',
            Liquidcup_n: '',
            MATRIXV3RNo_n: '',
            MATRIXV3R_n: '',
            DAPPEND_n: '',
            MATRIXV3FORCEPNo_n: '',
            MATRIXV3FORCEP_n: '',
            MOUTHPROP_n: '',
            ROUNDDIBURNo_n: '',
            ROUNDDIBUR_n: '',
            GLASSLAB_n: '',
            CYLINDERDIBURSNo_n: '',
            CYLINDERDIBURS_n: '',
            AIROTORP_n: '',
            ROUNDDIBURFNo_n: '',
            ROUNDDIBURF_n: '',
            CONTRA_n: '',
            CYLINDERDIBURFNo_n: '',
            CYLINDERDIBURF_n: '',
            Cottonswab_n: '',
            DYCALC_n: '',
            RUPPERCTBNo_n: '',
            RUPPERCTB_n: '',
            SPATULAPLASTIC_n: '',
            SYRING_n: '',
            CEMENTS_n: '',
            BLADEHO_n: '',
            MENDREL_n: '',
            BLADENo_n: '',
            BLADE_n: '',
            POPONNo_n: '',
            POPON_n: '',
        },
        validationSchema: Yup.object({
            ToolId: Yup.string().required('Required'),
            papercenter_endo: Yup.string().required('Required'),
            EndoBursBox: Yup.string().required('Required'),
            HF32MM1540_endo: Yup.string().required('Required'),
            cloth_endo: Yup.string().required('Required'),
            ColorBarbedbrodch_endo: Yup.string().required('Required'),
            Barbedbrodch_endo: Yup.string().required('Required'),
            HF23MM4580_endo: Yup.string().required('Required'),
            WATER_endo: Yup.string().required('Required'),
            ColorLentuloSpiral_endo: Yup.string().required('Required'),
            Lentulospiral_endo: Yup.string().required('Required'),
            HF25MM1540_endo: Yup.string().required('Required'),
            Examinationkit_endo: Yup.string().required('Required'),
            PROH21MM_endo: Yup.string().required('Required'),
            HF25MM4580_endo: Yup.string().required('Required'),
            Tripplesyringe_endo: Yup.string().required('Required'),
            PROH25MM_endo: Yup.string().required('Required'),
            WATER2o_endo: Yup.string().required('Required'),
            HGateDrillF_endo: Yup.string().required('Required'),
            NF21MM1540_endo: Yup.string().required('Required'),
            Mouthprop_endo: Yup.string().required('Required'),
            HGateDrillB_endo: Yup.string().required('Required'),
            NF21MM4560_endo: Yup.string().required('Required'),
            Syringe_endo: Yup.string().required('Required'),
            Syringe5ML_endo: Yup.string().required('Required'),
            NF25MM1540_endo: Yup.string().required('Required'),
            Cottonswab_endo: Yup.string().required('Required'),
            Needlewash2427_endo: Yup.string().required('Required'),
            NF25MM4560_endo: Yup.string().required('Required'),
            Airotor_endo: Yup.string().required('Required'),
            RootZx_endo: Yup.string().required('Required'),
            Contra_endo: Yup.string().required('Required'),
            Glasslab_endo: Yup.string().required('Required'),
            KF21MM840_endo: Yup.string().required('Required'),
            FileStand_endo: Yup.string().required('Required'),
            HighPowerSuction_endo: Yup.string().required('Required'),
            KF21MM4580_enod: Yup.string().required('Required'),
            NumberPlatePP_endo: Yup.string().required('Required'),
            PlatePP_endo: Yup.string().required('Required'),
            OCBOXSET_endo: Yup.string().required('Required'),
            KF25MM840_endo: Yup.string().required('Required'),
            RubberdamFlame_endo: Yup.string().required('Required'),
            FRCBOXSET_endo: Yup.string().required('Required'),
            KF25MM4580_endo: Yup.string().required('Required'),
            RubberdamSheet_endo: Yup.string().required('Required'),
            NumberCF21_endo: Yup.string().required('Required'),
            CF21_endo: Yup.string().required('Required'),
            KF30MM840_endo: Yup.string().required('Required'),
            NumberCLAMP_endo: Yup.string().required('Required'),
            CLAMP_endo: Yup.string().required('Required'),
            NumberCF25_endo: Yup.string().required('Required'),
            CF25_endo: Yup.string().required('Required'),
            KF30MM4580_endo: Yup.string().required('Required'),
            Examinationkit_n: Yup.string().required('Required'),
            COMPOSIT_n: Yup.string().required('Required'),
            RUBBERD_n: Yup.string().required('Required'),
            WATTERP_n: Yup.string().required('Required'),
            ANALGAM_n: Yup.string().required('Required'),
            CLAMPNO_n: Yup.string().required('Required'),
            CLAMPP_n: Yup.string().required('Required'),
            TRIPPLES_n: Yup.string().required('Required'),
            SETCOMPOSITSLOW_n: Yup.string().required('Required'),
            HSTELLSLOW_n: Yup.string().required('Required'),
            Centerpunchingfabric_n: Yup.string().required('Required'),
            SETCOMPOSITFAST_n: Yup.string().required('Required'),
            SETASTROPOL_n: Yup.string().required('Required'),
            Clothcover_n: Yup.string().required('Required'),
            PLSCOMPOSIT_n: Yup.string().required('Required'),
            IVORYTOFFMATRIX_n: Yup.string().required('Required'),
            UNC15P_n: Yup.string().required('Required'),
            SPOONEXCABIG_n: Yup.string().required('Required'),
            HIGHTPSUCTION_n: Yup.string().required('Required'),
            Liquidcup_n: Yup.string().required('Required'),
            MATRIXV3RNo_n: Yup.string().required('Required'),
            MATRIXV3R_n: Yup.string().required('Required'),
            DAPPEND_n: Yup.string().required('Required'),
            MATRIXV3FORCEPNo_n: Yup.string().required('Required'),
            MATRIXV3FORCEP_n: Yup.string().required('Required'),
            MOUTHPROP_n: Yup.string().required('Required'),
            ROUNDDIBURNo_n: Yup.string().required('Required'),
            ROUNDDIBUR_n: Yup.string().required('Required'),
            GLASSLAB_n: Yup.string().required('Required'),
            CYLINDERDIBURSNo_n: Yup.string().required('Required'),
            CYLINDERDIBURS_n: Yup.string().required('Required'),
            AIROTORP_N: Yup.string().required('Required'),
            ROUNDDIBURFNo_n: Yup.string().required('Required'),
            ROUNDDIBURF_n: Yup.string().required('Required'),
            CONTRA_n: Yup.string().required('Required'),
            CYLINDERDIBURFNo_n: Yup.string().required('Required'),
            CYLINDERDIBURF_n: Yup.string().required('Required'),
            Cottonswab_n: Yup.string().required('Required'),
            DYCALC_n: Yup.string().required('Required'),
            RUPPERCTBNo_n: Yup.string().required('Required'),
            RUPPERCTB_n: Yup.string().required('Required'),
            SPATULAPLASTIC_n: Yup.string().required('Required'),
            SYRING_n: Yup.string().required('Required'),
            CEMENTS_n: Yup.string().required('Required'),
            BLADEHO_n: Yup.string().required('Required'),
            MENDREL_n: Yup.string().required('Required'),
            BLADENo_n: Yup.string().required('Required'),
            BLADE_n: Yup.string().required('Required'),
            POPONNo_n: Yup.string().required('Required'),
            POPON_n: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            return submitForm(
                values.ToolId,
                values.papercenter_endo,
                values.EndoBursBox,
                values.HF32MM1540_endo,
                values.cloth_endo,
                values.ColorBarbedbrodch_endo,
                values.Barbedbrodch_endo,
                values.HF23MM4580_endo,
                values.WATER_endo,
                values.ColorLentuloSpiral_endo,
                values.Lentulospiral_endo,
                values.HF25MM1540_endo,
                values.Examinationkit_endo,
                values.PROH21MM_endo,
                values.HF25MM4580_endo,
                values.Tripplesyringe_endo,
                values.PROH25MM_endo,
                values.WATER2o_endo,
                values.HGateDrillF_endo,
                values.NF21MM1540_endo,
                values.Mouthprop_endo,
                values.HGateDrillB_endo,
                values.NF21MM4560_endo,
                values.Syringe_endo,
                values.Syringe5ML_endo,
                values.NF25MM1540_endo,
                values.Cottonswab_endo,
                values.Needlewash2427_endo,
                values.NF25MM4560_endo,
                values.Airotor_endo,
                values.RootZx_endo,
                values.Contra_endo,
                values.Glasslab_endo,
                values.KF21MM840_endo,
                values.FileStand_endo,
                values.HighPowerSuction_endo,
                values.KF21MM4580_enod,
                values.NumberPlatePP_endo,
                values.PlatePP_endo,
                values.OCBOXSET_endo,
                values.KF25MM840_endo,
                values.RubberdamFlame_endo,
                values.FRCBOXSET_endo,
                values.KF25MM4580_endo,
                values.RubberdamSheet_endo,
                values.NumberCF21_endo,
                values.CF21_endo,
                values.KF30MM840_endo,
                values.NumberCLAMP_endo,
                values.CLAMP_endo,
                values.NumberCF25_endo,
                values.CF25_endo,
                values.KF30MM4580_endo,
                values.Examinationkit_n,
                values.COMPOSIT_n,
                values.RUBBERD_n,
                values.WATTERP_n,
                values.ANALGAM_n,
                values.CLAMPNO_n,
                values.CLAMPP_n,
                values.TRIPPLES_n,
                values.SETCOMPOSITSLOW_n,
                values.HSTELLSLOW_n,
                values.Centerpunchingfabric_n,
                values.SETCOMPOSITFAST_n,
                values.SETASTROPOL_n,
                values.Clothcover_n,
                values.PLSCOMPOSIT_n,
                values.IVORYTOFFMATRIX_n,
                values.UNC15P_n,
                values.SPOONEXCABIG_n,
                values.HIGHTPSUCTION_n,
                values.Liquidcup_n,
                values.MATRIXV3RNo_n,
                values.MATRIXV3R_n,
                values.DAPPEND_n,
                values.MATRIXV3FORCEPNo_n,
                values.MATRIXV3FORCEP_n,
                values.MOUTHPROP_n,
                values.ROUNDDIBURNo_n,
                values.ROUNDDIBUR_n,
                values.GLASSLAB_n,
                values.CYLINDERDIBURSNo_n,
                values.CYLINDERDIBURS_n,
                values.AIROTORP_n,
                values.ROUNDDIBURFNo_n,
                values.ROUNDDIBURF_n,
                values.CONTRA_n,
                values.CYLINDERDIBURFNo_n,
                values.CYLINDERDIBURF_n,
                values.Cottonswab_n,
                values.DYCALC_n,
                values.RUPPERCTBNo_n,
                values.RUPPERCTB_n,
                values.SPATULAPLASTIC_n,
                values.SYRING_n,
                values.CEMENTS_n,
                values.BLADEHO_n,
                values.MENDREL_n,
                values.BLADENo_n,
                values.BLADE_n,
                values.POPONNo_n,
                values.POPON_n,
            );
        },
    });

    return (
        <div>
            <button className="butRes" onClick={openModal}>
                Details
            </button>
            <StyleModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="modal"
            >
                <button onClick={closeModal}>X</button>
                <div>
                    <center>
                        <h1>Equipment Withdraw</h1>
                    </center>
                    <div>
                        <label htmlFor="ToolId">HN :{" "}</label>
                        <input
                            id="ToolId"
                            name="ToolId"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ToolId}
                        />
                        {formik.touched.ToolId && formik.errors.ToolId ? (
                            <div className="error">{formik.errors.ToolId}</div>
                        ) : null} <br />

                        <label htmlFor="papercenter_endo">HN :{" "}</label>
                        <input
                            id="papercenter_endo"
                            name="papercenter_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.papercenter_endo}
                        />
                        {formik.touched.papercenter_endo && formik.errors.papercenter_endo ? (
                            <div className="error">{formik.errors.papercenter_endo}</div>
                        ) : null} <br />

                        <label htmlFor="EndoBursBox">HN :{" "}</label>
                        <input
                            id="EndoBursBox"
                            name="EndoBursBox"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.EndoBursBox}
                        />
                        {formik.touched.EndoBursBox && formik.errors.EndoBursBox ? (
                            <div className="error">{formik.errors.EndoBursBox}</div>
                        ) : null} <br />

                        <label htmlFor="HF32MM1540_endo">HN :{" "}</label>
                        <input
                            id="HF32MM1540_endo"
                            name="HF32MM1540_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.HF32MM1540_endo}
                        />
                        {formik.touched.HF32MM1540_endo && formik.errors.HF32MM1540_endo ? (
                            <div className="error">{formik.errors.HF32MM1540_endo}</div>
                        ) : null} <br />

                        <label htmlFor="cloth_endo">HN :{" "}</label>
                        <input
                            id="cloth_endo"
                            name="cloth_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cloth_endo}
                        />
                        {formik.touched.cloth_endo && formik.errors.cloth_endo ? (
                            <div className="error">{formik.errors.cloth_endo}</div>
                        ) : null} <br />

                        <label htmlFor="ColorBarbedbrodch_endo">HN :{" "}</label>
                        <input
                            id="ColorBarbedbrodch_endo"
                            name="ColorBarbedbrodch_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ColorBarbedbrodch_endo}
                        />
                        {formik.touched.ColorBarbedbrodch_endo && formik.errors.ColorBarbedbrodch_endo ? (
                            <div className="error">{formik.errors.ColorBarbedbrodch_endo}</div>
                        ) : null} <br />

                        <label htmlFor="Barbedbrodch_endo">HN :{" "}</label>
                        <input
                            id="Barbedbrodch_endo"
                            name="Barbedbrodch_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Barbedbrodch_endo}
                        />
                        {formik.touched.Barbedbrodch_endo && formik.errors.Barbedbrodch_endo ? (
                            <div className="error">{formik.errors.Barbedbrodch_endo}</div>
                        ) : null} <br />

                        <label htmlFor="HF23MM4580_endo">HN :{" "}</label>
                        <input
                            id="HF23MM4580_endo"
                            name="HF23MM4580_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.HF23MM4580_endo}
                        />
                        {formik.touched.HF23MM4580_endo && formik.errors.HF23MM4580_endo ? (
                            <div className="error">{formik.errors.HF23MM4580_endo}</div>
                        ) : null} <br />

                        <label htmlFor="WATER_endo">HN :{" "}</label>
                        <input
                            id="WATER_endo"
                            name="WATER_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.WATER_endo}
                        />
                        {formik.touched.WATER_endo && formik.errors.WATER_endo ? (
                            <div className="error">{formik.errors.WATER_endo}</div>
                        ) : null} <br />

                        <label htmlFor="ColorLentuloSpiral_endo">HN :{" "}</label>
                        <input
                            id="ColorLentuloSpiral_endo"
                            name="ColorLentuloSpiral_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ColorLentuloSpiral_endo}
                        />
                        {formik.touched.ColorLentuloSpiral_endo && formik.errors.ColorLentuloSpiral_endo ? (
                            <div className="error">{formik.errors.ColorLentuloSpiral_endo}</div>
                        ) : null} <br />

                        <label htmlFor="Lentulospiral_endo">HN :{" "}</label>
                        <input
                            id="Lentulospiral_endo"
                            name="Lentulospiral_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Lentulospiral_endo}
                        />
                        {formik.touched.Lentulospiral_endo && formik.errors.Lentulospiral_endo ? (
                            <div className="error">{formik.errors.Lentulospiral_endo}</div>
                        ) : null} <br />

                        <label htmlFor="HF25MM1540_endo">HN :{" "}</label>
                        <input
                            id="HF25MM1540_endo"
                            name="HF25MM1540_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.HF25MM1540_endo}
                        />
                        {formik.touched.HF25MM1540_endo && formik.errors.HF25MM1540_endo ? (
                            <div className="error">{formik.errors.HF25MM1540_endo}</div>
                        ) : null} <br />

                        <label htmlFor="Examinationkit_endo">HN :{" "}</label>
                        <input
                            id="Examinationkit_endo"
                            name="Examinationkit_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Examinationkit_endo}
                        />
                        {formik.touched.Examinationkit_endo && formik.errors.Examinationkit_endo ? (
                            <div className="error">{formik.errors.Examinationkit_endo}</div>
                        ) : null} <br />

                        <label htmlFor="PROH21MM_endo">HN :{" "}</label>
                        <input
                            id="PROH21MM_endo"
                            name="PROH21MM_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.PROH21MM_endo}
                        />
                        {formik.touched.PROH21MM_endo && formik.errors.PROH21MM_endo ? (
                            <div className="error">{formik.errors.PROH21MM_endo}</div>
                        ) : null} <br />

                        <label htmlFor="HF25MM4580_endo">HN :{" "}</label>
                        <input
                            id="HF25MM4580_endo"
                            name="HF25MM4580_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.HF25MM4580_endo}
                        />
                        {formik.touched.HF25MM4580_endo && formik.errors.HF25MM4580_endo ? (
                            <div className="error">{formik.errors.HF25MM4580_endo}</div>
                        ) : null} <br />

                        <label htmlFor="Tripplesyringe_endo">HN :{" "}</label>
                        <input
                            id="Tripplesyringe_endo"
                            name="Tripplesyringe_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Tripplesyringe_endo}
                        />
                        {formik.touched.Tripplesyringe_endo && formik.errors.Tripplesyringe_endo ? (
                            <div className="error">{formik.errors.Tripplesyringe_endo}</div>
                        ) : null} <br />

                        <label htmlFor="PROH25MM_endo">HN :{" "}</label>
                        <input
                            id="PROH25MM_endo"
                            name="PROH25MM_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.PROH25MM_endo}
                        />
                        {formik.touched.PROH25MM_endo && formik.errors.PROH25MM_endo ? (
                            <div className="error">{formik.errors.PROH25MM_endo}</div>
                        ) : null} <br />

                        <label htmlFor="WATER2o_endo">HN :{" "}</label>
                        <input
                            id="WATER2o_endo"
                            name="WATER2o_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.WATER2o_endo}
                        />
                        {formik.touched.WATER2o_endo && formik.errors.WATER2o_endo ? (
                            <div className="error">{formik.errors.WATER2o_endo}</div>
                        ) : null} <br />

                        <label htmlFor="HGateDrillF_endo">HN :{" "}</label>
                        <input
                            id="HGateDrillF_endo"
                            name="HGateDrillF_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.HGateDrillF_endo}
                        />
                        {formik.touched.HGateDrillF_endo && formik.errors.HGateDrillF_endo ? (
                            <div className="error">{formik.errors.HGateDrillF_endo}</div>
                        ) : null} <br />

                        <label htmlFor="NF21MM1540_endo">HN :{" "}</label>
                        <input
                            id="NF21MM1540_endo"
                            name="NF21MM1540_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.NF21MM1540_endo}
                        />
                        {formik.touched.NF21MM1540_endo && formik.errors.NF21MM1540_endo ? (
                            <div className="error">{formik.errors.NF21MM1540_endo}</div>
                        ) : null} <br />

                        <label htmlFor="Mouthprop_endo">HN :{" "}</label>
                        <input
                            id="Mouthprop_endo"
                            name="Mouthprop_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Mouthprop_endo}
                        />
                        {formik.touched.Mouthprop_endo && formik.errors.Mouthprop_endo ? (
                            <div className="error">{formik.errors.Mouthprop_endo}</div>
                        ) : null} <br />

                        <label htmlFor="HGateDrillB_endo">HN :{" "}</label>
                        <input
                            id="HGateDrillB_endo"
                            name="HGateDrillB_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.HGateDrillB_endo}
                        />
                        {formik.touched.HGateDrillB_endo && formik.errors.HGateDrillB_endo ? (
                            <div className="error">{formik.errors.HGateDrillB_endo}</div>
                        ) : null} <br />

                        <label htmlFor="NF21MM4560_endo">HN :{" "}</label>
                        <input
                            id="NF21MM4560_endo"
                            name="NF21MM4560_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.NF21MM4560_endo}
                        />
                        {formik.touched.NF21MM4560_endo && formik.errors.NF21MM4560_endo ? (
                            <div className="error">{formik.errors.NF21MM4560_endo}</div>
                        ) : null} <br />

                        <label htmlFor="Syringe_endo">HN :{" "}</label>
                        <input
                            id="Syringe_endo"
                            name="Syringe_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Syringe_endo}
                        />
                        {formik.touched.Syringe_endo && formik.errors.Syringe_endo ? (
                            <div className="error">{formik.errors.Syringe_endo}</div>
                        ) : null} <br />

                        <label htmlFor="Syringe5ML_endo">HN :{" "}</label>
                        <input
                            id="Syringe5ML_endo"
                            name="Syringe5ML_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Syringe5ML_endo}
                        />
                        {formik.touched.Syringe5ML_endo && formik.errors.Syringe5ML_endo ? (
                            <div className="error">{formik.errors.Syringe5ML_endo}</div>
                        ) : null} <br />


                        <label htmlFor="NF25MM1540_endo">HN :{" "}</label>
                        <input
                            id="NF25MM1540_endo"
                            name="NF25MM1540_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.NF25MM1540_endo}
                        />
                        {formik.touched.NF25MM1540_endo && formik.errors.NF25MM1540_endo ? (
                            <div className="error">{formik.errors.NF25MM1540_endo}</div>
                        ) : null} <br />

                        <label htmlFor="Cottonswab_endo">HN :{" "}</label>
                        <input
                            id="Cottonswab_endo"
                            name="Cottonswab_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Cottonswab_endo}
                        />
                        {formik.touched.Cottonswab_endo && formik.errors.Cottonswab_endo ? (
                            <div className="error">{formik.errors.Cottonswab_endo}</div>
                        ) : null} <br />

                        <label htmlFor="Needlewash2427_endo">HN :{" "}</label>
                        <input
                            id="Needlewash2427_endo"
                            name="Needlewash2427_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Needlewash2427_endo}
                        />
                        {formik.touched.Needlewash2427_endo && formik.errors.Needlewash2427_endo ? (
                            <div className="error">{formik.errors.Needlewash2427_endo}</div>
                        ) : null} <br />

                        <label htmlFor="NF25MM4560_endo">HN :{" "}</label>
                        <input
                            id="NF25MM4560_endo"
                            name="NF25MM4560_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.NF25MM4560_endo}
                        />
                        {formik.touched.NF25MM4560_endo && formik.errors.NF25MM4560_endo ? (
                            <div className="error">{formik.errors.NF25MM4560_endo}</div>
                        ) : null} <br />

                        <label htmlFor="Airotor_endo">HN :{" "}</label>
                        <input
                            id="Airotor_endo"
                            name="Airotor_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Airotor_endo}
                        />
                        {formik.touched.Airotor_endo && formik.errors.Airotor_endo ? (
                            <div className="error">{formik.errors.Airotor_endo}</div>
                        ) : null} <br />

                        <label htmlFor="RootZx_endo">HN :{" "}</label>
                        <input
                            id="RootZx_endo"
                            name="RootZx_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.RootZx_endo}
                        />
                        {formik.touched.RootZx_endo && formik.errors.RootZx_endo ? (
                            <div className="error">{formik.errors.RootZx_endo}</div>
                        ) : null} <br />

                        <label htmlFor="Contra_endo">HN :{" "}</label>
                        <input
                            id="Contra_endo"
                            name="Contra_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Contra_endo}
                        />
                        {formik.touched.Contra_endo && formik.errors.Contra_endo ? (
                            <div className="error">{formik.errors.Contra_endo}</div>
                        ) : null} <br />

                        <label htmlFor="Glasslab_endo">HN :{" "}</label>
                        <input
                            id="Glasslab_endo"
                            name="Glasslab_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Glasslab_endo}
                        />
                        {formik.touched.Glasslab_endo && formik.errors.Glasslab_endo ? (
                            <div className="error">{formik.errors.Glasslab_endo}</div>
                        ) : null} <br />

                        <label htmlFor="KF21MM840_endo">HN :{" "}</label>
                        <input
                            id="KF21MM840_endo"
                            name="KF21MM840_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.KF21MM840_endo}
                        />
                        {formik.touched.KF21MM840_endo && formik.errors.KF21MM840_endo ? (
                            <div className="error">{formik.errors.KF21MM840_endo}</div>
                        ) : null} <br />

                        <label htmlFor="FileStand_endo">HN :{" "}</label>
                        <input
                            id="FileStand_endo"
                            name="FileStand_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.FileStand_endo}
                        />
                        {formik.touched.FileStand_endo && formik.errors.FileStand_endo ? (
                            <div className="error">{formik.errors.FileStand_endo}</div>
                        ) : null} <br />

                        <label htmlFor="HighPowerSuction_endo">HN :{" "}</label>
                        <input
                            id="HighPowerSuction_endo"
                            name="HighPowerSuction_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.HighPowerSuction_endo}
                        />
                        {formik.touched.HighPowerSuction_endo && formik.errors.HighPowerSuction_endo ? (
                            <div className="error">{formik.errors.HighPowerSuction_endo}</div>
                        ) : null} <br />

                        <label htmlFor="KF21MM4580_enod">HN :{" "}</label>
                        <input
                            id="KF21MM4580_enod"
                            name="KF21MM4580_enod"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.KF21MM4580_enod}
                        />
                        {formik.touched.KF21MM4580_enod && formik.errors.KF21MM4580_enod ? (
                            <div className="error">{formik.errors.KF21MM4580_enod}</div>
                        ) : null} <br />

                        <label htmlFor="NumberPlatePP_endo">HN :{" "}</label>
                        <input
                            id="NumberPlatePP_endo"
                            name="NumberPlatePP_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.NumberPlatePP_endo}
                        />
                        {formik.touched.NumberPlatePP_endo && formik.errors.NumberPlatePP_endo ? (
                            <div className="error">{formik.errors.NumberPlatePP_endo}</div>
                        ) : null} <br />

                        <label htmlFor="PlatePP_endo">HN :{" "}</label>
                        <input
                            id="PlatePP_endo"
                            name="PlatePP_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.PlatePP_endo}
                        />
                        {formik.touched.PlatePP_endo && formik.errors.PlatePP_endo ? (
                            <div className="error">{formik.errors.PlatePP_endo}</div>
                        ) : null} <br />

                        <label htmlFor="OCBOXSET_endo">HN :{" "}</label>
                        <input
                            id="OCBOXSET_endo"
                            name="OCBOXSET_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.OCBOXSET_endo}
                        />
                        {formik.touched.OCBOXSET_endo && formik.errors.OCBOXSET_endo ? (
                            <div className="error">{formik.errors.OCBOXSET_endo}</div>
                        ) : null} <br />

                        <label htmlFor="KF25MM840_endo">HN :{" "}</label>
                        <input
                            id="KF25MM840_endo"
                            name="KF25MM840_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.KF25MM840_endo}
                        />
                        {formik.touched.KF25MM840_endo && formik.errors.KF25MM840_endo ? (
                            <div className="error">{formik.errors.KF25MM840_endo}</div>
                        ) : null} <br />

                        <label htmlFor="RubberdamFlame_endo">HN :{" "}</label>
                        <input
                            id="RubberdamFlame_endo"
                            name="RubberdamFlame_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.RubberdamFlame_endo}
                        />
                        {formik.touched.RubberdamFlame_endo && formik.errors.RubberdamFlame_endo ? (
                            <div className="error">{formik.errors.RubberdamFlame_endo}</div>
                        ) : null} <br />

                        <label htmlFor="FRCBOXSET_endo">HN :{" "}</label>
                        <input
                            id="FRCBOXSET_endo"
                            name="FRCBOXSET_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.FRCBOXSET_endo}
                        />
                        {formik.touched.FRCBOXSET_endo && formik.errors.FRCBOXSET_endo ? (
                            <div className="error">{formik.errors.FRCBOXSET_endo}</div>
                        ) : null} <br />


                        <label htmlFor="KF25MM4580_endo">HN :{" "}</label>
                        <input
                            id="KF25MM4580_endo"
                            name="KF25MM4580_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.KF25MM4580_endo}
                        />
                        {formik.touched.KF25MM4580_endo && formik.errors.KF25MM4580_endo ? (
                            <div className="error">{formik.errors.KF25MM4580_endo}</div>
                        ) : null} <br />

                        <label htmlFor="RubberdamSheet_endo">HN :{" "}</label>
                        <input
                            id="RubberdamSheet_endo"
                            name="RubberdamSheet_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.RubberdamSheet_endo}
                        />
                        {formik.touched.RubberdamSheet_endo && formik.errors.RubberdamSheet_endo ? (
                            <div className="error">{formik.errors.RubberdamSheet_endo}</div>
                        ) : null} <br />

                        <label htmlFor="NumberCF21_endo">HN :{" "}</label>
                        <input
                            id="NumberCF21_endo"
                            name="NumberCF21_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.NumberCF21_endo}
                        />
                        {formik.touched.NumberCF21_endo && formik.errors.NumberCF21_endo ? (
                            <div className="error">{formik.errors.NumberCF21_endo}</div>
                        ) : null} <br />

                        <label htmlFor="CF21_endo">HN :{" "}</label>
                        <input
                            id="CF21_endo"
                            name="CF21_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.CF21_endo}
                        />
                        {formik.touched.CF21_endo && formik.errors.CF21_endo ? (
                            <div className="error">{formik.errors.CF21_endo}</div>
                        ) : null} <br />

                        <label htmlFor="KF30MM840_endo">HN :{" "}</label>
                        <input
                            id="KF30MM840_endo"
                            name="KF30MM840_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.KF30MM840_endo}
                        />
                        {formik.touched.KF30MM840_endo && formik.errors.KF30MM840_endo ? (
                            <div className="error">{formik.errors.KF30MM840_endo}</div>
                        ) : null} <br />

                        <label htmlFor="NumberCLAMP_endo">HN :{" "}</label>
                        <input
                            id="NumberCLAMP_endo"
                            name="NumberCLAMP_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.NumberCLAMP_endo}
                        />
                        {formik.touched.NumberCLAMP_endo && formik.errors.NumberCLAMP_endo ? (
                            <div className="error">{formik.errors.NumberCLAMP_endo}</div>
                        ) : null} <br />

                        <label htmlFor="CLAMP_endo">HN :{" "}</label>
                        <input
                            id="CLAMP_endo"
                            name="CLAMP_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.CLAMP_endo}
                        />
                        {formik.touched.CLAMP_endo && formik.errors.CLAMP_endo ? (
                            <div className="error">{formik.errors.CLAMP_endo}</div>
                        ) : null} <br />

                        <label htmlFor="NumberCF25_endo">HN :{" "}</label>
                        <input
                            id="NumberCF25_endo"
                            name="NumberCF25_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.NumberCF25_endo}
                        />
                        {formik.touched.NumberCF25_endo && formik.errors.NumberCF25_endo ? (
                            <div className="error">{formik.errors.NumberCF25_endo}</div>
                        ) : null} <br />

                        <label htmlFor="CF25_endo">HN :{" "}</label>
                        <input
                            id="CF25_endo"
                            name="CF25_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.CF25_endo}
                        />
                        {formik.touched.CF25_endo && formik.errors.CF25_endo ? (
                            <div className="error">{formik.errors.CF25_endo}</div>
                        ) : null} <br />

                        <label htmlFor="KF30MM4580_endo">HN :{" "}</label>
                        <input
                            id="KF30MM4580_endo"
                            name="KF30MM4580_endo"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.KF30MM4580_endo}
                        />
                        {formik.touched.KF30MM4580_endo && formik.errors.KF30MM4580_endo ? (
                            <div className="error">{formik.errors.KF30MM4580_endo}</div>
                        ) : null} <br />

                        <label htmlFor="Examinationkit_n">HN :{" "}</label>
                        <input
                            id="Examinationkit_n"
                            name="Examinationkit_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Examinationkit_n}
                        />
                        {formik.touched.Examinationkit_n && formik.errors.Examinationkit_n ? (
                            <div className="error">{formik.errors.Examinationkit_n}</div>
                        ) : null} <br />

                        <label htmlFor="COMPOSIT_n">HN :{" "}</label>
                        <input
                            id="COMPOSIT_n"
                            name="COMPOSIT_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.COMPOSIT_n}
                        />
                        {formik.touched.COMPOSIT_n && formik.errors.COMPOSIT_n ? (
                            <div className="error">{formik.errors.COMPOSIT_n}</div>
                        ) : null} <br />

                        <label htmlFor="RUBBERD_n">HN :{" "}</label>
                        <input
                            id="RUBBERD_n"
                            name="RUBBERD_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.RUBBERD_n}
                        />
                        {formik.touched.RUBBERD_n && formik.errors.RUBBERD_n ? (
                            <div className="error">{formik.errors.RUBBERD_n}</div>
                        ) : null} <br />

                        <label htmlFor="WATTERP_n">HN :{" "}</label>
                        <input
                            id="WATTERP_n"
                            name="WATTERP_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.WATTERP_n}
                        />
                        {formik.touched.WATTERP_n && formik.errors.WATTERP_n ? (
                            <div className="error">{formik.errors.WATTERP_n}</div>
                        ) : null} <br />

                        <label htmlFor="ANALGAM_n">HN :{" "}</label>
                        <input
                            id="ANALGAM_n"
                            name="ANALGAM_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ANALGAM_n}
                        />
                        {formik.touched.ANALGAM_n && formik.errors.ANALGAM_n ? (
                            <div className="error">{formik.errors.ANALGAM_n}</div>
                        ) : null} <br />

                        <label htmlFor="CLAMPNO_n">HN :{" "}</label>
                        <input
                            id="CLAMPNO_n"
                            name="CLAMPNO_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.CLAMPNO_n}
                        />
                        {formik.touched.CLAMPNO_n && formik.errors.CLAMPNO_n ? (
                            <div className="error">{formik.errors.CLAMPNO_n}</div>
                        ) : null} <br />

                        <label htmlFor="CLAMPP_n">HN :{" "}</label>
                        <input
                            id="CLAMPP_n"
                            name="CLAMPP_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.CLAMPP_n}
                        />
                        {formik.touched.CLAMPP_n && formik.errors.CLAMPP_n ? (
                            <div className="error">{formik.errors.CLAMPP_n}</div>
                        ) : null} <br />

                        <label htmlFor="TRIPPLES_n">HN :{" "}</label>
                        <input
                            id="TRIPPLES_n"
                            name="TRIPPLES_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.TRIPPLES_n}
                        />
                        {formik.touched.TRIPPLES_n && formik.errors.TRIPPLES_n ? (
                            <div className="error">{formik.errors.TRIPPLES_n}</div>
                        ) : null} <br />

                        <label htmlFor="SETCOMPOSITSLOW_n">HN :{" "}</label>
                        <input
                            id="SETCOMPOSITSLOW_n"
                            name="SETCOMPOSITSLOW_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.SETCOMPOSITSLOW_n}
                        />
                        {formik.touched.SETCOMPOSITSLOW_n && formik.errors.SETCOMPOSITSLOW_n ? (
                            <div className="error">{formik.errors.SETCOMPOSITSLOW_n}</div>
                        ) : null} <br />

                        <label htmlFor="HSTELLSLOW_n">HN :{" "}</label>
                        <input
                            id="HSTELLSLOW_n"
                            name="HSTELLSLOW_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.HSTELLSLOW_n}
                        />
                        {formik.touched.HSTELLSLOW_n && formik.errors.HSTELLSLOW_n ? (
                            <div className="error">{formik.errors.HSTELLSLOW_n}</div>
                        ) : null} <br />


                        <label htmlFor="Centerpunchingfabric_n">HN :{" "}</label>
                        <input
                            id="Centerpunchingfabric_n"
                            name="Centerpunchingfabric_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Centerpunchingfabric_n}
                        />
                        {formik.touched.Centerpunchingfabric_n && formik.errors.Centerpunchingfabric_n ? (
                            <div className="error">{formik.errors.Centerpunchingfabric_n}</div>
                        ) : null} <br />

                        <label htmlFor="SETCOMPOSITFAST_n">HN :{" "}</label>
                        <input
                            id="SETCOMPOSITFAST_n"
                            name="SETCOMPOSITFAST_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.SETCOMPOSITFAST_n}
                        />
                        {formik.touched.SETCOMPOSITFAST_n && formik.errors.SETCOMPOSITFAST_n ? (
                            <div className="error">{formik.errors.SETCOMPOSITFAST_n}</div>
                        ) : null} <br />

                        <label htmlFor="SETASTROPOL_n">HN :{" "}</label>
                        <input
                            id="SETASTROPOL_n"
                            name="SETASTROPOL_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.SETASTROPOL_n}
                        />
                        {formik.touched.SETASTROPOL_n && formik.errors.SETASTROPOL_n ? (
                            <div className="error">{formik.errors.SETASTROPOL_n}</div>
                        ) : null} <br />

                        <label htmlFor="Clothcover_n">HN :{" "}</label>
                        <input
                            id="Clothcover_n"
                            name="Clothcover_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Clothcover_n}
                        />
                        {formik.touched.Clothcover_n && formik.errors.Clothcover_n ? (
                            <div className="error">{formik.errors.Clothcover_n}</div>
                        ) : null} <br />

                        <label htmlFor="PLSCOMPOSIT_n">HN :{" "}</label>
                        <input
                            id="PLSCOMPOSIT_n"
                            name="PLSCOMPOSIT_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.hnPLSCOMPOSIT_n}
                        />
                        {formik.touched.PLSCOMPOSIT_n && formik.errors.PLSCOMPOSIT_n ? (
                            <div className="error">{formik.errors.PLSCOMPOSIT_n}</div>
                        ) : null} <br />


                        <label htmlFor="IVORYTOFFMATRIX_n">HN :{" "}</label>
                        <input
                            id="IVORYTOFFMATRIX_n"
                            name="IVORYTOFFMATRIX_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.IVORYTOFFMATRIX_n}
                        />
                        {formik.touched.IVORYTOFFMATRIX_n && formik.errors.IVORYTOFFMATRIX_n ? (
                            <div className="error">{formik.errors.IVORYTOFFMATRIX_n}</div>
                        ) : null} <br />

                        <label htmlFor="UNC15P_n">HN :{" "}</label>
                        <input
                            id="UNC15P_n"
                            name="UNC15P_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.UNC15P_n}
                        />
                        {formik.touched.UNC15P_n && formik.errors.UNC15P_n ? (
                            <div className="error">{formik.errors.UNC15P_n}</div>
                        ) : null} <br />

                        <label htmlFor="SPOONEXCABIG_n">HN :{" "}</label>
                        <input
                            id="SPOONEXCABIG_n"
                            name="SPOONEXCABIG_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.SPOONEXCABIG_n}
                        />
                        {formik.touched.SPOONEXCABIG_n && formik.errors.SPOONEXCABIG_n ? (
                            <div className="error">{formik.errors.SPOONEXCABIG_n}</div>
                        ) : null} <br />

                        <label htmlFor="HIGHTPSUCTION_n">HN :{" "}</label>
                        <input
                            id="HIGHTPSUCTION_n"
                            name="HIGHTPSUCTION_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.HIGHTPSUCTION_n}
                        />
                        {formik.touched.HIGHTPSUCTION_n && formik.errors.HIGHTPSUCTION_n ? (
                            <div className="error">{formik.errors.HIGHTPSUCTION_n}</div>
                        ) : null} <br />

                        <label htmlFor="Liquidcup_n">HN :{" "}</label>
                        <input
                            id="Liquidcup_n"
                            name="Liquidcup_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Liquidcup_n}
                        />
                        {formik.touched.Liquidcup_n && formik.errors.Liquidcup_n ? (
                            <div className="error">{formik.errors.Liquidcup_n}</div>
                        ) : null} <br />

                        <label htmlFor="MATRIXV3RNo_n">HN :{" "}</label>
                        <input
                            id="MATRIXV3RNo_n"
                            name="MATRIXV3RNo_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.MATRIXV3RNo_n}
                        />
                        {formik.touched.MATRIXV3RNo_n && formik.errors.MATRIXV3RNo_n ? (
                            <div className="error">{formik.errors.MATRIXV3RNo_n}</div>
                        ) : null} <br />

                        <label htmlFor="MATRIXV3R_n">HN :{" "}</label>
                        <input
                            id="MATRIXV3R_n"
                            name="MATRIXV3R_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.MATRIXV3R_n}
                        />
                        {formik.touched.MATRIXV3R_n && formik.errors.MATRIXV3R_n ? (
                            <div className="error">{formik.errors.MATRIXV3R_n}</div>
                        ) : null} <br />

                        <label htmlFor="DAPPEND_n">HN :{" "}</label>
                        <input
                            id="DAPPEND_n"
                            name="DAPPEND_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.DAPPEND_n}
                        />
                        {formik.touched.DAPPEND_n && formik.errors.DAPPEND_n ? (
                            <div className="error">{formik.errors.DAPPEND_n}</div>
                        ) : null} <br />

                        <label htmlFor="MATRIXV3FORCEPNo_n">HN :{" "}</label>
                        <input
                            id="MATRIXV3FORCEPNo_n"
                            name="MATRIXV3FORCEPNo_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.MATRIXV3FORCEPNo_n}
                        />
                        {formik.touched.MATRIXV3FORCEPNo_n && formik.errors.MATRIXV3FORCEPNo_n ? (
                            <div className="error">{formik.errors.MATRIXV3FORCEPNo_n}</div>
                        ) : null} <br />

                        <label htmlFor="MATRIXV3FORCEP_n">HN :{" "}</label>
                        <input
                            id="MATRIXV3FORCEP_n"
                            name="MATRIXV3FORCEP_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.MATRIXV3FORCEP_n}
                        />
                        {formik.touched.MATRIXV3FORCEP_n && formik.errors.MATRIXV3FORCEP_n ? (
                            <div className="error">{formik.errors.MATRIXV3FORCEP_n}</div>
                        ) : null} <br />

                        <label htmlFor="MOUTHPROP_n">HN :{" "}</label>
                        <input
                            id="MOUTHPROP_n"
                            name="MOUTHPROP_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.MOUTHPROP_n}
                        />
                        {formik.touched.MOUTHPROP_n && formik.errors.MOUTHPROP_n ? (
                            <div className="error">{formik.errors.MOUTHPROP_n}</div>
                        ) : null} <br />

                        <label htmlFor="ROUNDDIBURNo_n">HN :{" "}</label>
                        <input
                            id="ROUNDDIBURNo_n"
                            name="ROUNDDIBURNo_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ROUNDDIBURNo_n}
                        />
                        {formik.touched.ROUNDDIBURNo_n && formik.errors.ROUNDDIBURNo_n ? (
                            <div className="error">{formik.errors.ROUNDDIBURNo_n}</div>
                        ) : null} <br />

                        <label htmlFor="ROUNDDIBUR_n">HN :{" "}</label>
                        <input
                            id="ROUNDDIBUR_n"
                            name="ROUNDDIBUR_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ROUNDDIBUR_n}
                        />
                        {formik.touched.ROUNDDIBUR_n && formik.errors.ROUNDDIBUR_n ? (
                            <div className="error">{formik.errors.ROUNDDIBUR_n}</div>
                        ) : null} <br />

                        <label htmlFor="GLASSLAB_n">HN :{" "}</label>
                        <input
                            id="GLASSLAB_n"
                            name="GLASSLAB_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.GLASSLAB_n}
                        />
                        {formik.touched.GLASSLAB_n && formik.errors.GLASSLAB_n ? (
                            <div className="error">{formik.errors.GLASSLAB_n}</div>
                        ) : null} <br />

                        <label htmlFor="CYLINDERDIBURSNo_n">HN :{" "}</label>
                        <input
                            id="CYLINDERDIBURSNo_n"
                            name="CYLINDERDIBURSNo_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.CYLINDERDIBURSNo_n}
                        />
                        {formik.touched.CYLINDERDIBURSNo_n && formik.errors.CYLINDERDIBURSNo_n ? (
                            <div className="error">{formik.errors.CYLINDERDIBURSNo_n}</div>
                        ) : null} <br />

                        <label htmlFor="CYLINDERDIBURS_n">HN :{" "}</label>
                        <input
                            id="CYLINDERDIBURS_n"
                            name="CYLINDERDIBURS_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.CYLINDERDIBURS_n}
                        />
                        {formik.touched.CYLINDERDIBURS_n && formik.errors.CYLINDERDIBURS_n ? (
                            <div className="error">{formik.errors.CYLINDERDIBURS_n}</div>
                        ) : null} <br />

                        <label htmlFor="AIROTORP_n">HN :{" "}</label>
                        <input
                            id="AIROTORP_n"
                            name="AIROTORP_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.AIROTORP_n}
                        />
                        {formik.touched.AIROTORP_n && formik.errors.AIROTORP_n ? (
                            <div className="error">{formik.errors.AIROTORP_n}</div>
                        ) : null} <br />

                        <label htmlFor="ROUNDDIBURFNo_n">HN :{" "}</label>
                        <input
                            id="ROUNDDIBURFNo_n"
                            name="ROUNDDIBURFNo_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ROUNDDIBURFNo_n}
                        />
                        {formik.touched.ROUNDDIBURFNo_n && formik.errors.ROUNDDIBURFNo_n ? (
                            <div className="error">{formik.errors.ROUNDDIBURFNo_n}</div>
                        ) : null} <br />

                        <label htmlFor="ROUNDDIBURF_n">HN :{" "}</label>
                        <input
                            id="ROUNDDIBURF_n"
                            name="ROUNDDIBURF_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ROUNDDIBURF_n}
                        />
                        {formik.touched.ROUNDDIBURF_n && formik.errors.ROUNDDIBURF_n ? (
                            <div className="error">{formik.errors.ROUNDDIBURF_n}</div>
                        ) : null} <br />

                        <label htmlFor="CONTRA_n">HN :{" "}</label>
                        <input
                            id="CONTRA_n"
                            name="CONTRA_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.CONTRA_n}
                        />
                        {formik.touched.CONTRA_n && formik.errors.CONTRA_n ? (
                            <div className="error">{formik.errors.CONTRA_n}</div>
                        ) : null} <br />

                        <label htmlFor="CYLINDERDIBURFNo_n">HN :{" "}</label>
                        <input
                            id="CYLINDERDIBURFNo_n"
                            name="CYLINDERDIBURFNo_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.CYLINDERDIBURFNo_n}
                        />
                        {formik.touched.CYLINDERDIBURFNo_n && formik.errors.CYLINDERDIBURFNo_n ? (
                            <div className="error">{formik.errors.CYLINDERDIBURFNo_n}</div>
                        ) : null} <br />

                        <label htmlFor="CYLINDERDIBURF_n">HN :{" "}</label>
                        <input
                            id="CYLINDERDIBURF_n"
                            name="CYLINDERDIBURF_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.CYLINDERDIBURF_n}
                        />
                        {formik.touched.CYLINDERDIBURF_n && formik.errors.CYLINDERDIBURF_n ? (
                            <div className="error">{formik.errors.CYLINDERDIBURF_n}</div>
                        ) : null} <br />

                        <label htmlFor="Cottonswab_n">HN :{" "}</label>
                        <input
                            id="Cottonswab_n"
                            name="Cottonswab_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Cottonswab_n}
                        />
                        {formik.touched.Cottonswab_n && formik.errors.Cottonswab_n ? (
                            <div className="error">{formik.errors.Cottonswab_n}</div>
                        ) : null} <br />

                        <label htmlFor="DYCALC_n">HN :{" "}</label>
                        <input
                            id="DYCALC_n"
                            name="DYCALC_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.DYCALC_n}
                        />
                        {formik.touched.DYCALC_n && formik.errors.DYCALC_n ? (
                            <div className="error">{formik.errors.DYCALC_n}</div>
                        ) : null} <br />

                        <label htmlFor="RUPPERCTBNo_n">HN :{" "}</label>
                        <input
                            id="RUPPERCTBNo_n"
                            name="RUPPERCTBNo_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.RUPPERCTBNo_n}
                        />
                        {formik.touched.RUPPERCTBNo_n && formik.errors.RUPPERCTBNo_n ? (
                            <div className="error">{formik.errors.RUPPERCTBNo_n}</div>
                        ) : null} <br />

                        <label htmlFor="RUPPERCTB_n">HN :{" "}</label>
                        <input
                            id="RUPPERCTB_n"
                            name="RUPPERCTB_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.RUPPERCTB_n}
                        />
                        {formik.touched.RUPPERCTB_n && formik.errors.RUPPERCTB_n ? (
                            <div className="error">{formik.errors.RUPPERCTB_n}</div>
                        ) : null} <br />

                        <label htmlFor="SPATULAPLASTIC_n">HN :{" "}</label>
                        <input
                            id="SPATULAPLASTIC_n"
                            name="SPATULAPLASTIC_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.SPATULAPLASTIC_n}
                        />
                        {formik.touched.SPATULAPLASTIC_n && formik.errors.SPATULAPLASTIC_n ? (
                            <div className="error">{formik.errors.SPATULAPLASTIC_n}</div>
                        ) : null} <br />

                        <label htmlFor="SYRING_n">HN :{" "}</label>
                        <input
                            id="SYRING_n"
                            name="SYRING_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.SYRING_n}
                        />
                        {formik.touched.SYRING_n && formik.errors.SYRING_n ? (
                            <div className="error">{formik.errors.SYRING_n}</div>
                        ) : null} <br />

                        <label htmlFor="CEMENTS_n">HN :{" "}</label>
                        <input
                            id="CEMENTS_n"
                            name="CEMENTS_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.CEMENTS_n}
                        />
                        {formik.touched.CEMENTS_n && formik.errors.CEMENTS_n ? (
                            <div className="error">{formik.errors.CEMENTS_n}</div>
                        ) : null} <br />

                        <label htmlFor="BLADEHO_n">HN :{" "}</label>
                        <input
                            id="BLADEHO_n"
                            name="BLADEHO_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.BLADEHO_n}
                        />
                        {formik.touched.BLADEHO_n && formik.errors.BLADEHO_n ? (
                            <div className="error">{formik.errors.BLADEHO_n}</div>
                        ) : null} <br />

                        <label htmlFor="MENDREL_n">HN :{" "}</label>
                        <input
                            id="MENDREL_n"
                            name="MENDREL_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.MENDREL_n}
                        />
                        {formik.touched.MENDREL_n && formik.errors.MENDREL_n ? (
                            <div className="error">{formik.errors.MENDREL_n}</div>
                        ) : null} <br />

                        <label htmlFor="BLADENo_n">HN :{" "}</label>
                        <input
                            id="BLADENo_n"
                            name="BLADENo_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.BLADENo_n}
                        />
                        {formik.touched.BLADENo_n && formik.errors.BLADENo_n ? (
                            <div className="error">{formik.errors.BLADENo_n}</div>
                        ) : null} <br />

                        <label htmlFor="BLADE_n">HN :{" "}</label>
                        <input
                            id="BLADE_n"
                            name="BLADE_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.BLADE_n}
                        />
                        {formik.touched.BLADE_n && formik.errors.BLADE_n ? (
                            <div className="error">{formik.errors.BLADE_n}</div>
                        ) : null} <br />

                        <label htmlFor="POPONNo_n">HN :{" "}</label>
                        <input
                            id="POPONNo_n"
                            name="POPONNo_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.POPONNo_n}
                        />
                        {formik.touched.POPONNo_n && formik.errors.POPONNo_n ? (
                            <div className="error">{formik.errors.POPONNo_n}</div>
                        ) : null} <br />

                        <label htmlFor="POPON_n">HN :{" "}</label>
                        <input
                            id="POPON_n"
                            name="POPON_n"
                            type="number"
                            placeholder="Number Only"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.POPON_n}
                        />
                        {formik.touched.POPON_n && formik.errors.POPON_n ? (
                            <div className="error">{formik.errors.POPON_n}</div>
                        ) : null} <br />
                    </div>
                </div>
            </StyleModal>
        </div>
    );
};

export default ToolModal;
