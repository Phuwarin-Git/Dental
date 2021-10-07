import StyleModal from "./index.view";
import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CloseButton from 'react-bootstrap/CloseButton'
import axios from "axios";
import '../../Yup.css'
import { Label } from 'semantic-ui-react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from "react-router-dom";



const ToolModal = ({ unique }) => {

    const [modalIsOpen, setIsOpen] = React.useState(true);

    useEffect(() => {
        console.log("Unique ? ===> ", unique)
    }, [modalIsOpen])

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const history = useHistory();


    function submitForm(
        testkit_periood,
        backteethscalingkit_periood,
        sickelfrontteeth_periood,
        sickelposteriorteethS204SD_periood,
        frontteethcuretteSG34_periood,
        AfterFive_periood,
        MiniFive_periood,
        PeriodontalProbeUNC15_periood,
        WHOProbe_periood,
        NeberProbe_periood,
        pourthemedicine_periood,
        Dappendish_periood,
        Mouthprop_periood,
        AnestheticSyringe_periood,
        whetstone_periood,
        P5scraper_periood,
        P10scraper_periood,
        Rabbercup_periood,
        Rabberbrush_periood,
        cottonbud_periood,
        Airotor_periood,
        Contra_periood,
        Phophy_periood,
        Straight_periood,
        Triplesyring_periood,
        ruler_periood,
        Retractor_periood,
        FabricMiddlepunch_periood,
        veil_periood,
        unitcleaningkit_periood,
        gumsurgerykit_periood,
        gumsurgicalgown_periood,
        testkit_toolcc1,
        glassofwater_toolcc1,
        Tripplesyring_toolcc1,
        FabricMiddlepunch_toolcc1,
        veil_toolcc1,
        UNC15Probe_toolcc1,
        medicinecup_toolcc1,
        Dappendish_toolcc1,
        Mouthprop_toolcc1,
        Glasslab_toolcc1,
        Airotor_toolcc1,
        Contra_toolcc1,
        cottonbud_toolcc1,
        Rubbercup_toolcc1,
        AnestheticSyringe_toolcc1,
        BladeHolder_toolcc1,
        Blade_toolcc1,
        Compositstopperset_toolcc1,
        Amalgamfillingset_toolcc1,
        Compositsandingsetslowrewind_toolcc1,
        Compositsandingsetfastrewinding_toolcc1,
        plasticcomposit_toolcc1,
        Spoonexcavatorlarge_toolcc1,
        MatrixV3_toolcc1,
        MatrixV3Forcep_toolcc1,
        Rounddimondbursetslow_toolcc1,
        Cylinderdimondbursetslow_toolcc1,
        Rounddimondbursetfast_toolcc1,
        Cylinderdimondbursetfast_toolcc1,
        Dycalcarrier_toolcc1,
        Spatulaplastic_toolcc1,
        Cementspatula_toolcc1,
        Mendrelscrubset_toolcc1,
        Poponsmall_toolcc1,
        Rubberdamset_toolcc1,
        clamp_toolcc1,
        Steelheadslowdown_toolcc1,
        Astropolpolishingset_toolcc1,
        IvoryTofflemirematrix_toolcc1,
        hightpowersuction_toolcc1,
        FabricMiddlepunch_endo,
        veil_endo,
        testkit_endo,
        Tripplesyringe_endo,
        Twoouncesglass_endo,
        Mouthprop_endo,
        AnestheticSyringe_endo,
        cottonbud_endo,
        Airotor_endo,
        Contra_endo,
        FileStand_endo,
        PlatePaperPoint_endo,
        RubberdamFlame_endo,
        RubberdamSheet_endo,
        Clamp_endo,
        EndoBursBoxHead_endo,
        Barbedbrodch_endo,
        Lentulospiral_endo,
        ProtaperHand21mm_endo,
        ProtaperHand25mm_endo,
        GateDrillheadfrontteeth_endo,
        GateDrillheadrearteeth_endo,
        Syringerinse5ml_endo,
        WashneedleNo2427_endo,
        HooktheRootZx_endo,
        Glasslab_endo,
        HighPowerSuction_endo,
        OCBoxset_endo,
        FRCBoxset_endo,
        CFile21_endo,
        CFile25_endo,
        HFile21mm1540_endo,
        HFile21mm4580_endo,
        HFile25mm1540_endo,
        HFile25mm4580_endo,
        NitiFile21mm1540_endo,
        NitiFile21mm4560_endo,
        NitiFile25mm1540_endo,
        NitiFile25mm4560_endo,
        KFile21mm840_endo,
        KFile21mm4580_endo,
        KFile25mm840_endo,
        KFile25mm4580_endo,
        KFile30mm840_endo,
        KFile30mm4580_endo,
    ) {

        const ApiSet = ({
            testkit_periood: testkit_periood,
            backteethscalingkit_periood: backteethscalingkit_periood,
            sickelfrontteeth_periood: sickelfrontteeth_periood,
            sickelposteriorteethS204SD_periood: sickelposteriorteethS204SD_periood,
            frontteethcuretteSG34_periood: frontteethcuretteSG34_periood,
            AfterFive_periood: AfterFive_periood,
            MiniFive_periood: MiniFive_periood,
            PeriodontalProbeUNC15_periood: PeriodontalProbeUNC15_periood,
            WHOProbe_periood: WHOProbe_periood,
            NeberProbe_periood: NeberProbe_periood,
            pourthemedicine_periood: pourthemedicine_periood,
            Dappendish_periood: Dappendish_periood,
            Mouthprop_periood: Mouthprop_periood,
            AnestheticSyringe_periood: AnestheticSyringe_periood,
            whetstone_periood: whetstone_periood,
            P5scraper_periood: P5scraper_periood,
            P10scraper_periood: P10scraper_periood,
            Rabbercup_periood: Rabbercup_periood,
            Rabberbrush_periood: Rabberbrush_periood,
            cottonbud_periood: cottonbud_periood,
            Airotor_periood: Airotor_periood,
            Contra_periood: Contra_periood,
            Phophy_periood: Phophy_periood,
            Straight_periood: Straight_periood,
            Triplesyring_periood: Triplesyring_periood,
            ruler_periood: ruler_periood,
            Retractor_periood: Retractor_periood,
            FabricMiddlepunch_periood: FabricMiddlepunch_periood,
            veil_periood: veil_periood,
            unitcleaningkit_periood: unitcleaningkit_periood,
            gumsurgerykit_periood: gumsurgerykit_periood,
            gumsurgicalgown_periood: gumsurgicalgown_periood,
        })
        const ApiSet1 = ({
            uniqueID: unique,
            testkit_toolcc1: testkit_toolcc1,
            glassofwater_toolcc1: glassofwater_toolcc1,
            Tripplesyring_toolcc1: Tripplesyring_toolcc1,
            FabricMiddlepunch_toolcc1: FabricMiddlepunch_toolcc1,
            veil_toolcc1: veil_toolcc1,
            UNC15Probe_toolcc1: UNC15Probe_toolcc1,
            medicinecup_toolcc1: medicinecup_toolcc1,
            Dappendish_toolcc1: Dappendish_toolcc1,
            Mouthprop_toolcc1: Mouthprop_toolcc1,
            Glasslab_toolcc1: Glasslab_toolcc1,
            Airotor_toolcc1: Airotor_toolcc1,
            Contra_toolcc1: Contra_toolcc1,
            cottonbud_toolcc1: cottonbud_toolcc1,
            Rubbercup_toolcc1: Rubbercup_toolcc1,
            AnestheticSyringe_toolcc1: AnestheticSyringe_toolcc1,
            BladeHolder_toolcc1: BladeHolder_toolcc1,
            Blade_toolcc1: Blade_toolcc1,
            Compositstopperset_toolcc1: Compositstopperset_toolcc1,
            Amalgamfillingset_toolcc1: Amalgamfillingset_toolcc1,
            Compositsandingsetslowrewind_toolcc1: Compositsandingsetslowrewind_toolcc1,
            Compositsandingsetfastrewinding_toolcc1: Compositsandingsetfastrewinding_toolcc1,
            plasticcomposit_toolcc1: plasticcomposit_toolcc1,
            Spoonexcavatorlarge_toolcc1: Spoonexcavatorlarge_toolcc1,
            MatrixV3_toolcc1: MatrixV3_toolcc1,
            MatrixV3Forcep_toolcc1: MatrixV3Forcep_toolcc1,
            Rounddimondbursetslow_toolcc1: Rounddimondbursetslow_toolcc1,
            Cylinderdimondbursetslow_toolcc1: Cylinderdimondbursetslow_toolcc1,
            Rounddimondbursetfast_toolcc1: Rounddimondbursetfast_toolcc1,
            Cylinderdimondbursetfast_toolcc1: Cylinderdimondbursetfast_toolcc1,
            Dycalcarrier_toolcc1: Dycalcarrier_toolcc1,
            Spatulaplastic_toolcc1: Spatulaplastic_toolcc1,
            Cementspatula_toolcc1: Cementspatula_toolcc1,
            Mendrelscrubset_toolcc1: Mendrelscrubset_toolcc1,
            Poponsmall_toolcc1: Poponsmall_toolcc1,
            Rubberdamset_toolcc1: Rubberdamset_toolcc1,
            clamp_toolcc1: clamp_toolcc1,
            Steelheadslowdown_toolcc1: Steelheadslowdown_toolcc1,
            Astropolpolishingset_toolcc1: Astropolpolishingset_toolcc1,
            IvoryTofflemirematrix_toolcc1: IvoryTofflemirematrix_toolcc1,
            hightpowersuction_toolcc1: hightpowersuction_toolcc1,
        })
        const ApiSet2 = ({
            FabricMiddlepunch_endo: FabricMiddlepunch_endo,
            veil_endo: veil_endo,
            testkit_endo: testkit_endo,
            Tripplesyringe_endo: Tripplesyringe_endo,
            Twoouncesglass_endo: Twoouncesglass_endo,
            Mouthprop_endo: Mouthprop_endo,
            AnestheticSyringe_endo: AnestheticSyringe_endo,
            cottonbud_endo: cottonbud_endo,
            Airotor_endo: Airotor_endo,
            Contra_endo: Contra_endo,
            FileStand_endo: FileStand_endo,
            PlatePaperPoint_endo: PlatePaperPoint_endo,
            RubberdamFlame_endo: RubberdamFlame_endo,
            RubberdamSheet_endo: RubberdamSheet_endo,
            Clamp_endo: Clamp_endo,
            EndoBursBoxHead_endo: EndoBursBoxHead_endo,
            Barbedbrodch_endo: Barbedbrodch_endo,
            Lentulospiral_endo: Lentulospiral_endo,
            ProtaperHand21mm_endo: ProtaperHand21mm_endo,
            ProtaperHand25mm_endo: ProtaperHand25mm_endo,
            GateDrillheadfrontteeth_endo: GateDrillheadfrontteeth_endo,
            GateDrillheadrearteeth_endo: GateDrillheadrearteeth_endo,
            Syringerinse5ml_endo: Syringerinse5ml_endo,
            WashneedleNo2427_endo: WashneedleNo2427_endo,
            HooktheRootZx_endo: HooktheRootZx_endo,
            Glasslab_endo: Glasslab_endo,
            HighPowerSuction_endo: HighPowerSuction_endo,
            OCBoxset_endo: OCBoxset_endo,
            FRCBoxset_endo: FRCBoxset_endo,
            CFile21_endo: CFile21_endo,
            CFile25_endo: CFile25_endo,
            HFile21mm1540_endo: HFile21mm1540_endo,
            HFile21mm4580_endo: HFile21mm4580_endo,
            HFile25mm1540_endo: HFile25mm1540_endo,
            HFile25mm4580_endo: HFile25mm4580_endo,
            NitiFile21mm1540_endo: NitiFile21mm1540_endo,
            NitiFile21mm4560_endo: NitiFile21mm4560_endo,
            NitiFile25mm1540_endo: NitiFile25mm1540_endo,
            NitiFile25mm4560_endo: NitiFile25mm4560_endo,
            KFile21mm840_endo: KFile21mm840_endo,
            KFile21mm4580_endo: KFile21mm4580_endo,
            KFile25mm840_endo: KFile25mm840_endo,
            KFile25mm4580_endo: KFile25mm4580_endo,
            KFile30mm840_endo: KFile30mm840_endo,
            KFile30mm4580_endo: KFile30mm4580_endo,
        })
        // console.log("Why Uniqe :", unique, " and :", UniqueIDtest)
        console.log("Success", ApiSet1)
        return axios.post("http://localhost:3000/Tool/create", ApiSet1).then((res) => {
            history.push('/StudentDashboard')
            return console.log("Res API 1 SET :", res)
        })



    }

    const formik = useFormik({
        initialValues: {
            testkit_periood: " ",
            backteethscalingkit_periood: " ",
            sickelfrontteeth_periood: " ",
            sickelposteriorteethS204SD_periood: " ",
            frontteethcuretteSG34_periood: " ",
            AfterFive_periood: " ",
            MiniFive_periood: " ",
            PeriodontalProbeUNC15_periood: " ",
            WHOProbe_periood: " ",
            NeberProbe_periood: " ",
            pourthemedicine_periood: " ",
            Dappendish_periood: " ",
            Mouthprop_periood: " ",
            AnestheticSyringe_periood: " ",
            whetstone_periood: " ",
            P5scraper_periood: " ",
            P10scraper_periood: " ",
            Rabbercup_periood: " ",
            Rabberbrush_periood: " ",
            cottonbud_periood: " ",
            Airotor_periood: " ",
            Contra_periood: " ",
            Phophy_periood: " ",
            Straight_periood: " ",
            Triplesyring_periood: " ",
            ruler_periood: " ",
            Retractor_periood: " ",
            FabricMiddlepunch_periood: " ",
            veil_periood: " ",
            unitcleaningkit_periood: " ",
            gumsurgerykit_periood: " ",
            gumsurgicalgown_periood: " ",
            testkit_toolcc1: " ",
            glassofwater_toolcc1: " ",
            Tripplesyring_toolcc1: " ",
            FabricMiddlepunch_toolcc1: " ",
            veil_toolcc1: " ",
            UNC15Probe_toolcc1: " ",
            medicinecup_toolcc1: " ",
            Dappendish_toolcc1: " ",
            Mouthprop_toolcc1: " ",
            Glasslab_toolcc1: " ",
            Airotor_toolcc1: " ",
            Contra_toolcc1: " ",
            cottonbud_toolcc1: " ",
            Rubbercup_toolcc1: " ",
            AnestheticSyringe_toolcc1: " ",
            BladeHolder_toolcc1: " ",
            Blade_toolcc1: " ",
            Compositstopperset_toolcc1: " ",
            Amalgamfillingset_toolcc1: " ",
            Compositsandingsetslowrewind_toolcc1: " ",
            Compositsandingsetfastrewinding_toolcc1: " ",
            plasticcomposit_toolcc1: " ",
            Spoonexcavatorlarge_toolcc1: " ",
            MatrixV3_toolcc1: " ",
            MatrixV3Forcep_toolcc1: " ",
            Rounddimondbursetslow_toolcc1: " ",
            Cylinderdimondbursetslow_toolcc1: " ",
            Rounddimondbursetfast_toolcc1: " ",
            Cylinderdimondbursetfast_toolcc1: " ",
            Dycalcarrier_toolcc1: " ",
            Spatulaplastic_toolcc1: " ",
            Cementspatula_toolcc1: " ",
            Mendrelscrubset_toolcc1: " ",
            Poponsmall_toolcc1: " ",
            Rubberdamset_toolcc1: " ",
            clamp_toolcc1: " ",
            Steelheadslowdown_toolcc1: " ",
            Astropolpolishingset_toolcc1: " ",
            IvoryTofflemirematrix_toolcc1: " ",
            hightpowersuction_toolcc1: " ",
            FabricMiddlepunch_endo: " ",
            veil_endo: " ",
            testkit_endo: " ",
            Tripplesyringe_endo: " ",
            Twoouncesglass_endo: " ",
            Mouthprop_endo: " ",
            AnestheticSyringe_endo: " ",
            cottonbud_endo: " ",
            Airotor_endo: " ",
            Contra_endo: " ",
            FileStand_endo: " ",
            PlatePaperPoint_endo: " ",
            RubberdamFlame_endo: " ",
            RubberdamSheet_endo: " ",
            Clamp_endo: " ",
            EndoBursBoxHead_endo: " ",
            Barbedbrodch_endo: " ",
            Lentulospiral_endo: " ",
            ProtaperHand21mm_endo: " ",
            ProtaperHand25mm_endo: " ",
            GateDrillheadfrontteeth_endo: " ",
            GateDrillheadrearteeth_endo: " ",
            Syringerinse5ml_endo: " ",
            WashneedleNo2427_endo: " ",
            HooktheRootZx_endo: " ",
            Glasslab_endo: " ",
            HighPowerSuction_endo: " ",
            OCBoxset_endo: " ",
            FRCBoxset_endo: " ",
            CFile21_endo: " ",
            CFile25_endo: " ",
            HFile21mm1540_endo: " ",
            HFile21mm4580_endo: " ",
            HFile25mm1540_endo: " ",
            HFile25mm4580_endo: " ",
            NitiFile21mm1540_endo: " ",
            NitiFile21mm4560_endo: " ",
            NitiFile25mm1540_endo: " ",
            NitiFile25mm4560_endo: " ",
            KFile21mm840_endo: " ",
            KFile21mm4580_endo: " ",
            KFile25mm840_endo: " ",
            KFile25mm4580_endo: " ",
            KFile30mm840_endo: " ",
            KFile30mm4580_endo: " ",
        },
        validationSchema: Yup.object({
            testkit_periood: Yup.string().required('Required'),
            backteethscalingkit_periood: Yup.string().required('Required'),
            sickelfrontteeth_periood: Yup.string().required('Required'),
            sickelposteriorteethS204SD_periood: Yup.string().required('Required'),
            frontteethcuretteSG34_periood: Yup.string().required('Required'),
            AfterFive_periood: Yup.string().required('Required'),
            MiniFive_periood: Yup.string().required('Required'),
            PeriodontalProbeUNC15_periood: Yup.string().required('Required'),
            WHOProbe_periood: Yup.string().required('Required'),
            NeberProbe_periood: Yup.string().required('Required'),
            pourthemedicine_periood: Yup.string().required('Required'),
            Dappendish_periood: Yup.string().required('Required'),
            Mouthprop_periood: Yup.string().required('Required'),
            AnestheticSyringe_periood: Yup.string().required('Required'),
            whetstone_periood: Yup.string().required('Required'),
            P5scraper_periood: Yup.string().required('Required'),
            P10scraper_periood: Yup.string().required('Required'),
            Rabbercup_periood: Yup.string().required('Required'),
            Rabberbrush_periood: Yup.string().required('Required'),
            cottonbud_periood: Yup.string().required('Required'),
            Airotor_periood: Yup.string().required('Required'),
            Contra_periood: Yup.string().required('Required'),
            Phophy_periood: Yup.string().required('Required'),
            Straight_periood: Yup.string().required('Required'),
            Triplesyring_periood: Yup.string().required('Required'),
            ruler_periood: Yup.string().required('Required'),
            Retractor_periood: Yup.string().required('Required'),
            FabricMiddlepunch_periood: Yup.string().required('Required'),
            veil_periood: Yup.string().required('Required'),
            unitcleaningkit_periood: Yup.string().required('Required'),
            gumsurgerykit_periood: Yup.string().required('Required'),
            gumsurgicalgown_periood: Yup.string().required('Required'),
            testkit_toolcc1: Yup.string().required('Required'),
            glassofwater_toolcc1: Yup.string().required('Required'),
            Tripplesyring_toolcc1: Yup.string().required('Required'),
            FabricMiddlepunch_toolcc1: Yup.string().required('Required'),
            veil_toolcc1: Yup.string().required('Required'),
            UNC15Probe_toolcc1: Yup.string().required('Required'),
            medicinecup_toolcc1: Yup.string().required('Required'),
            Dappendish_toolcc1: Yup.string().required('Required'),
            Mouthprop_toolcc1: Yup.string().required('Required'),
            Glasslab_toolcc1: Yup.string().required('Required'),
            Airotor_toolcc1: Yup.string().required('Required'),
            Contra_toolcc1: Yup.string().required('Required'),
            cottonbud_toolcc1: Yup.string().required('Required'),
            Rubbercup_toolcc1: Yup.string().required('Required'),
            AnestheticSyringe_toolcc1: Yup.string().required('Required'),
            BladeHolder_toolcc1: Yup.string().required('Required'),
            Blade_toolcc1: Yup.string().required('Required'),
            Compositstopperset_toolcc1: Yup.string().required('Required'),
            Amalgamfillingset_toolcc1: Yup.string().required('Required'),
            Compositsandingsetslowrewind_toolcc1: Yup.string().required('Required'),
            Compositsandingsetfastrewinding_toolcc1: Yup.string().required('Required'),
            plasticcomposit_toolcc1: Yup.string().required('Required'),
            Spoonexcavatorlarge_toolcc1: Yup.string().required('Required'),
            MatrixV3_toolcc1: Yup.string().required('Required'),
            MatrixV3Forcep_toolcc1: Yup.string().required('Required'),
            Rounddimondbursetslow_toolcc1: Yup.string().required('Required'),
            Cylinderdimondbursetslow_toolcc1: Yup.string().required('Required'),
            Rounddimondbursetfast_toolcc1: Yup.string().required('Required'),
            Cylinderdimondbursetfast_toolcc1: Yup.string().required('Required'),
            Dycalcarrier_toolcc1: Yup.string().required('Required'),
            Spatulaplastic_toolcc1: Yup.string().required('Required'),
            Cementspatula_toolcc1: Yup.string().required('Required'),
            Mendrelscrubset_toolcc1: Yup.string().required('Required'),
            Poponsmall_toolcc1: Yup.string().required('Required'),
            Rubberdamset_toolcc1: Yup.string().required('Required'),
            clamp_toolcc1: Yup.string().required('Required'),
            Steelheadslowdown_toolcc1: Yup.string().required('Required'),
            Astropolpolishingset_toolcc1: Yup.string().required('Required'),
            IvoryTofflemirematrix_toolcc1: Yup.string().required('Required'),
            hightpowersuction_toolcc1: Yup.string().required('Required'),
            FabricMiddlepunch_endo: Yup.string().required('Required'),
            veil_endo: Yup.string().required('Required'),
            testkit_endo: Yup.string().required('Required'),
            Tripplesyringe_endo: Yup.string().required('Required'),
            Twoouncesglass_endo: Yup.string().required('Required'),
            Mouthprop_endo: Yup.string().required('Required'),
            AnestheticSyringe_endo: Yup.string().required('Required'),
            cottonbud_endo: Yup.string().required('Required'),
            Airotor_endo: Yup.string().required('Required'),
            Contra_endo: Yup.string().required('Required'),
            FileStand_endo: Yup.string().required('Required'),
            PlatePaperPoint_endo: Yup.string().required('Required'),
            RubberdamFlame_endo: Yup.string().required('Required'),
            RubberdamSheet_endo: Yup.string().required('Required'),
            Clamp_endo: Yup.string().required('Required'),
            EndoBursBoxHead_endo: Yup.string().required('Required'),
            Barbedbrodch_endo: Yup.string().required('Required'),
            Lentulospiral_endo: Yup.string().required('Required'),
            ProtaperHand21mm_endo: Yup.string().required('Required'),
            ProtaperHand25mm_endo: Yup.string().required('Required'),
            GateDrillheadfrontteeth_endo: Yup.string().required('Required'),
            GateDrillheadrearteeth_endo: Yup.string().required('Required'),
            Syringerinse5ml_endo: Yup.string().required('Required'),
            WashneedleNo2427_endo: Yup.string().required('Required'),
            HooktheRootZx_endo: Yup.string().required('Required'),
            Glasslab_endo: Yup.string().required('Required'),
            HighPowerSuction_endo: Yup.string().required('Required'),
            OCBoxset_endo: Yup.string().required('Required'),
            FRCBoxset_endo: Yup.string().required('Required'),
            CFile21_endo: Yup.string().required('Required'),
            CFile25_endo: Yup.string().required('Required'),
            HFile21mm1540_endo: Yup.string().required('Required'),
            HFile21mm4580_endo: Yup.string().required('Required'),
            HFile25mm1540_endo: Yup.string().required('Required'),
            HFile25mm4580_endo: Yup.string().required('Required'),
            NitiFile21mm1540_endo: Yup.string().required('Required'),
            NitiFile21mm4560_endo: Yup.string().required('Required'),
            NitiFile25mm1540_endo: Yup.string().required('Required'),
            NitiFile25mm4560_endo: Yup.string().required('Required'),
            KFile21mm840_endo: Yup.string().required('Required'),
            KFile21mm4580_endo: Yup.string().required('Required'),
            KFile25mm840_endo: Yup.string().required('Required'),
            KFile25mm4580_endo: Yup.string().required('Required'),
            KFile30mm840_endo: Yup.string().required('Required'),
            KFile30mm4580_endo: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            return submitForm(
                values.testkit_periood,
                values.backteethscalingkit_periood,
                values.sickelfrontteeth_periood,
                values.sickelposteriorteethS204SD_periood,
                values.frontteethcuretteSG34_periood,
                values.AfterFive_periood,
                values.MiniFive_periood,
                values.PeriodontalProbeUNC15_periood,
                values.WHOProbe_periood,
                values.NeberProbe_periood,
                values.pourthemedicine_periood,
                values.Dappendish_periood,
                values.Mouthprop_periood,
                values.AnestheticSyringe_periood,
                values.whetstone_periood,
                values.P5scraper_periood,
                values.P10scraper_periood,
                values.Rabbercup_periood,
                values.Rabberbrush_periood,
                values.cottonbud_periood,
                values.Airotor_periood,
                values.Contra_periood,
                values.Phophy_periood,
                values.Straight_periood,
                values.Triplesyring_periood,
                values.ruler_periood,
                values.Retractor_periood,
                values.FabricMiddlepunch_periood,
                values.veil_periood,
                values.unitcleaningkit_periood,
                values.gumsurgerykit_periood,
                values.gumsurgicalgown_periood,
                values.testkit_toolcc1,
                values.glassofwater_toolcc1,
                values.Tripplesyring_toolcc1,
                values.FabricMiddlepunch_toolcc1,
                values.veil_toolcc1,
                values.UNC15Probe_toolcc1,
                values.medicinecup_toolcc1,
                values.Dappendish_toolcc1,
                values.Mouthprop_toolcc1,
                values.Glasslab_toolcc1,
                values.Airotor_toolcc1,
                values.Contra_toolcc1,
                values.cottonbud_toolcc1,
                values.Rubbercup_toolcc1,
                values.AnestheticSyringe_toolcc1,
                values.BladeHolder_toolcc1,
                values.Blade_toolcc1,
                values.Compositstopperset_toolcc1,
                values.Amalgamfillingset_toolcc1,
                values.Compositsandingsetslowrewind_toolcc1,
                values.Compositsandingsetfastrewinding_toolcc1,
                values.plasticcomposit_toolcc1,
                values.Spoonexcavatorlarge_toolcc1,
                values.MatrixV3_toolcc1,
                values.MatrixV3Forcep_toolcc1,
                values.Rounddimondbursetslow_toolcc1,
                values.Cylinderdimondbursetslow_toolcc1,
                values.Rounddimondbursetfast_toolcc1,
                values.Cylinderdimondbursetfast_toolcc1,
                values.Dycalcarrier_toolcc1,
                values.Spatulaplastic_toolcc1,
                values.Cementspatula_toolcc1,
                values.Mendrelscrubset_toolcc1,
                values.Poponsmall_toolcc1,
                values.Rubberdamset_toolcc1,
                values.clamp_toolcc1,
                values.Steelheadslowdown_toolcc1,
                values.Astropolpolishingset_toolcc1,
                values.IvoryTofflemirematrix_toolcc1,
                values.hightpowersuction_toolcc1,
                values.FabricMiddlepunch_endo,
                values.veil_endo,
                values.testkit_endo,
                values.Tripplesyringe_endo,
                values.Twoouncesglass_endo,
                values.Mouthprop_endo,
                values.AnestheticSyringe_endo,
                values.cottonbud_endo,
                values.Airotor_endo,
                values.Contra_endo,
                values.FileStand_endo,
                values.PlatePaperPoint_endo,
                values.RubberdamFlame_endo,
                values.RubberdamSheet_endo,
                values.Clamp_endo,
                values.EndoBursBoxHead_endo,
                values.Barbedbrodch_endo,
                values.Lentulospiral_endo,
                values.ProtaperHand21mm_endo,
                values.ProtaperHand25mm_endo,
                values.GateDrillheadfrontteeth_endo,
                values.GateDrillheadrearteeth_endo,
                values.Syringerinse5ml_endo,
                values.WashneedleNo2427_endo,
                values.HooktheRootZx_endo,
                values.Glasslab_endo,
                values.HighPowerSuction_endo,
                values.OCBoxset_endo,
                values.FRCBoxset_endo,
                values.CFile21_endo,
                values.CFile25_endo,
                values.HFile21mm1540_endo,
                values.HFile21mm4580_endo,
                values.HFile25mm1540_endo,
                values.HFile25mm4580_endo,
                values.NitiFile21mm1540_endo,
                values.NitiFile21mm4560_endo,
                values.NitiFile25mm1540_endo,
                values.NitiFile25mm4560_endo,
                values.KFile21mm840_endo,
                values.KFile21mm4580_endo,
                values.KFile25mm840_endo,
                values.KFile25mm4580_endo,
                values.KFile30mm840_endo,
                values.KFile30mm4580_endo,
            );
        },
    });

    return (
        <div style={{ background: '#FFFFFF', minHeight: '1080px' }}>
            <StyleModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="modal"
            >

                <Row>
                    <Col><CloseButton onClick={closeModal} size="15" style={{ marginRight: 300 }} /></Col>
                    <Col>  <h1 style={{ color: '#FFFFFF' }}>เบิกอุปกรณ์</h1></Col>


                    <Col><h1 style={{ marginLeft: 200 }}>CC1</h1></Col>
                </Row>
                <br />
                <input type="search" /><br /><br />
                <label style={{ marginLeft: 15, marginBottom: 15 }}>รายการ</label>
                <label style={{ marginLeft: 475, marginBottom: 15 }}>รายการ</label>

                <form onSubmit={formik.handleSubmit}>
                    <div>

                        <div style={{ minHeight: 250 }}>
                            <Container style={{ fontSize: 15 }}>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <label htmlFor="testkit_toolcc1">ชุดตรวจ{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select

                                                    id="testkit_toolcc1"
                                                    name="testkit_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.testkit_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label htmlFor="glassofwater_toolcc1">แก้วน้ำ{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select

                                                    id="glassofwater_toolcc1"
                                                    name="glassofwater_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.glassofwater_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label htmlFor="Tripplesyring_toolcc1">Tripple syring{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Tripplesyring_toolcc1"
                                                    name="Tripplesyring_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Tripplesyring_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="FabricMiddlepunch_toolcc1">ผ้าเจาะกลาง{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="FabricMiddlepunch_toolcc1"
                                                    name="FabricMiddlepunch_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.FabricMiddlepunch_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="veil_toolcc1">ผ้าคลุม{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>

                                                <select
                                                    id="veil_toolcc1"
                                                    name="veil_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.veil_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="UNC15Probe_toolcc1">UNC 15 Probe{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="UNC15Probe_toolcc1"
                                                    name="UNC15Probe_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.UNC15Probe_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="medicinecup_toolcc1">ถ้วยนํ้ายา{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="medicinecup_toolcc1"
                                                    name="medicinecup_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.medicinecup_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Dappendish_toolcc1">Dappen dish{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Dappendish_toolcc1"
                                                    name="Dappendish_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Dappendish_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Mouthprop_toolcc1">Mouth prop{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Mouthprop_toolcc1"
                                                    name="Mouthprop_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Mouthprop_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Glasslab_toolcc1">Glass lab{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Glasslab_toolcc1"
                                                    name="Glasslab_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Glasslab_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Airotor_toolcc1">Airotor{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Airotor_toolcc1"
                                                    name="Airotor_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Airotor_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Contra_toolcc1">Contra{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Contra_toolcc1"
                                                    name="Contra_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Contra_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="cottonbud_toolcc1">ไม้พันสำลี{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="cottonbud_toolcc1"
                                                    name="cottonbud_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.cottonbud_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Rubbercup_toolcc1">Rubber cup/tip/Brush{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Rubbercup_toolcc1"
                                                    name="Rubbercup_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Rubbercup_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="AnestheticSyringe_toolcc1">Syringe ยาชา{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="AnestheticSyringe_toolcc1"
                                                    name="AnestheticSyringe_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.AnestheticSyringe_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="BladeHolder_toolcc1">Blade Holder{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="BladeHolder_toolcc1"
                                                    name="BladeHolder_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.BladeHolder_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Blade_toolcc1">Blade No....{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Blade_toolcc1"
                                                    name="Blade_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Blade_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Compositstopperset_toolcc1">ชุดอุด Composit{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Compositstopperset_toolcc1"
                                                    name="Compositstopperset_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Compositstopperset_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Amalgamfillingset_toolcc1">ชุดอุด Amalgam{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Amalgamfillingset_toolcc1"
                                                    name="Amalgamfillingset_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Amalgamfillingset_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Compositsandingsetslowrewind_toolcc1">ชุดขัด Composit กรอช้า{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Compositsandingsetslowrewind_toolcc1"
                                                    name="Compositsandingsetslowrewind_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Compositsandingsetslowrewind_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>
                                    </Col>
                                    {/* Middleeeeeeeeeeeeeeeeeeeee                        */}
                                    <Col>
                                        <Row>
                                            <Col>
                                                <label htmlFor="Compositsandingsetfastrewinding_toolcc1">ชุดขัด Composit กรอเร็ว{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Compositsandingsetfastrewinding_toolcc1"
                                                    name="Compositsandingsetfastrewinding_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Compositsandingsetfastrewinding_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="plasticcomposit_toolcc1">plastic composit{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="plasticcomposit_toolcc1"
                                                    name="plasticcomposit_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.plasticcomposit_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Spoonexcavatorlarge_toolcc1">Spoon excavator ใหญ่{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Spoonexcavatorlarge_toolcc1"
                                                    name="Spoonexcavatorlarge_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Spoonexcavatorlarge_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="MatrixV3_toolcc1">Matrix V3 Ring ...{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="MatrixV3_toolcc1"
                                                    name="MatrixV3_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.MatrixV3_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="MatrixV3Forcep_toolcc1">Matrix V3 Forcep{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="MatrixV3Forcep_toolcc1"
                                                    name="MatrixV3Forcep_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.MatrixV3Forcep_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Rounddimondbursetslow_toolcc1">Round dimond bur (กรอช้า){""}</label>

                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Rounddimondbursetslow_toolcc1"
                                                    name="Rounddimondbursetslow_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Rounddimondbursetslow_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Cylinderdimondbursetslow_toolcc1">Cylinder dimond bur (กรอช้า){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Cylinderdimondbursetslow_toolcc1"
                                                    name="Cylinderdimondbursetslow_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Cylinderdimondbursetslow_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Rounddimondbursetfast_toolcc1">Round dimond bur (กรอเร็ว){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Rounddimondbursetfast_toolcc1"
                                                    name="Rounddimondbursetfast_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Rounddimondbursetfast_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Cylinderdimondbursetfast_toolcc1">Cylinder dimond bur (กรอเร็ว){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Cylinderdimondbursetfast_toolcc1"
                                                    name="Cylinderdimondbursetfast_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Cylinderdimondbursetfast_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Dycalcarrier_toolcc1">Dycal carrier{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Dycalcarrier_toolcc1"
                                                    name="Dycalcarrier_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Dycalcarrier_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Spatulaplastic_toolcc1">Spatula plastic{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Spatulaplastic_toolcc1"
                                                    name="Spatulaplastic_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Spatulaplastic_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Cementspatula_toolcc1">Cement spatula{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Cementspatula_toolcc1"
                                                    name="Cementspatula_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Cementspatula_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Mendrelscrubset_toolcc1">ชุดขัด Mendrel{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Mendrelscrubset_toolcc1"
                                                    name="Mendrelscrubset_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Mendrelscrubset_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Poponsmall_toolcc1">Pop on เล็ก/ใหญ่{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Poponsmall_toolcc1"
                                                    name="Poponsmall_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Poponsmall_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Rubberdamset_toolcc1">ชุด Rubber dam{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Rubberdamset_toolcc1"
                                                    name="Rubberdamset_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Rubberdamset_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="clamp_toolcc1">clamp No.{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="clamp_toolcc1"
                                                    name="clamp_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.clamp_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Steelheadslowdown_toolcc1">หัว Steel กรอช้า{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Steelheadslowdown_toolcc1"
                                                    name="Steelheadslowdown_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Steelheadslowdown_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Astropolpolishingset_toolcc1">ชุดขัด Astropol{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Astropolpolishingset_toolcc1"
                                                    name="Astropolpolishingset_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Astropolpolishingset_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="IvoryTofflemirematrix_toolcc1">Ivory / Tofflemire matrix{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="IvoryTofflemirematrix_toolcc1"
                                                    name="IvoryTofflemirematrix_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.IvoryTofflemirematrix_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="hightpowersuction_toolcc1">hight power suction{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="hightpowersuction_toolcc1"
                                                    name="hightpowersuction_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.hightpowersuction_toolcc1}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>

                            <div style={{ flex: 1, height: 2, backgroundColor: '#D0D3D4', marginBottom: 30, marginTop: 10 }}>
                            </div>
                            <label style={{ marginLeft: 15, marginBottom: 15 }}>รายการ</label>
                            <label style={{ marginLeft: 475, marginBottom: 15 }}>รายการ</label>

                            <Container style={{ fontSize: 15 }}>

                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <label htmlFor="FabricMiddlepunch_endo">ผ้าเจาะกลาง{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="FabricMiddlepunch_endo"
                                                    name="FabricMiddlepunch_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.FabricMiddlepunch_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="veil_endo">ผ้าคลุม{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="veil_endo"
                                                    name="veil_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.veil_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="testkit_endo">ชุดตรวจ{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="testkit_endo"
                                                    name="testkit_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.testkit_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Tripplesyringe_endo">Tripple syringe{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Tripplesyringe_endo"
                                                    name="Tripplesyringe_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Tripplesyringe_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Twoouncesglass_endo">เเก้วนํ้ายา 2 ออนซ์{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Twoouncesglass_endo"
                                                    name="Twoouncesglass_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Twoouncesglass_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col>
                                                <label htmlFor="Mouthprop_endo">Mouth prop{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Mouthprop_endo"
                                                    name="Mouthprop_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Mouthprop_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="AnestheticSyringe_endo">Syringe ยาชา{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="AnestheticSyringe_endo"
                                                    name="AnestheticSyringe_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.AnestheticSyringe_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="cottonbud_endo">ไม้พันสำลี{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="cottonbud_endo"
                                                    name="cottonbud_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.cottonbud_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Airotor_endo">Airotor{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Airotor_endo"
                                                    name="Airotor_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Airotor_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Contra_endo">Contra{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Contra_endo"
                                                    name="Contra_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Contra_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="FileStand_endo ">File Stand {""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="FileStand_endo"
                                                    name="FileStand_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.FileStand_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="PlatePaperPoint_endo ">Plate Paper Point No.{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="PlatePaperPoint_endo"
                                                    name="PlatePaperPoint_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.PlatePaperPoint_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="RubberdamFlame_endo">Rubber dam Flame{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="RubberdamFlame_endo"
                                                    name="RubberdamFlame_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.RubberdamFlame_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="RubberdamSheet_endo">Rubber dam Sheet{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="RubberdamSheet_endo"
                                                    name="RubberdamSheet_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.RubberdamSheet_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Clamp_endo">Clamp No....{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Clamp_endo"
                                                    name="Clamp_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Clamp_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="EndoBursBoxHead_endo">หัว Endo Burs Box{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="EndoBursBoxHead_endo"
                                                    name="EndoBursBoxHead_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.EndoBursBoxHead_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Barbedbrodch_endo">Barbed brodch สี ...{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Barbedbrodch_endo"
                                                    name="Barbedbrodch_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Barbedbrodch_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Lentulospiral_endo">Lentulo spiral สี ....{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Lentulospiral_endo"
                                                    name="Lentulospiral_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Lentulospiral_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="ProtaperHand21mm_endo ">Protaper Hand 21 mm.{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="ProtaperHand21mm_endo"
                                                    name="ProtaperHand21mm_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.ProtaperHand21mm_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="ProtaperHand25mm_endo ">Protaper Hand 25 mm{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="ProtaperHand25mm_endo"
                                                    name="ProtaperHand25mm_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.ProtaperHand25mm_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="GateDrillheadfrontteeth_endo">หัว Gate Drill ฟันหน้า{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="GateDrillheadfrontteeth_endo"
                                                    name="GateDrillheadfrontteeth_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.GateDrillheadfrontteeth_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="GateDrillheadrearteeth_endo">หัว Gate Drill ฟันหลัง{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="GateDrillheadrearteeth_endo"
                                                    name="GateDrillheadrearteeth_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.GateDrillheadrearteeth_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Syringerinse5ml_endo">Syringe ล้าง 5 ml.{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Tripplesyring_toolcc1"
                                                    name="Tripplesyring_toolcc1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Syringerinse5ml_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <label htmlFor="WashneedleNo2427_endo">เข็มล้าง เบอร์ 24/27{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="WashneedleNo2427_endo"
                                                    name="WashneedleNo2427_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.WashneedleNo2427_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="HooktheRootZx_endo">ขอเกี่ยวเครื่อง Root Zx{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="HooktheRootZx_endo"
                                                    name="HooktheRootZx_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.HooktheRootZx_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Glasslab_endo">Glasslab{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Glasslab_endo"
                                                    name="Glasslab_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Glasslab_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="HighPowerSuction_endo">High Power Suction{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="HighPowerSuction_endo"
                                                    name="HighPowerSuction_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.HighPowerSuction_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="OCBoxset_endo">ชุุดเครื่องมือ OC Box set {""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="OCBoxset_endo"
                                                    name="OCBoxset_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.OCBoxset_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="FRCBoxset_endo">ชุดเครื่องมือ FRC Box set {""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="FRCBoxset_endo"
                                                    name="FRCBoxset_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.FRCBoxset_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="CFile21_endo">C - File 21 เบอร์ ...{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="CFile21_endo"
                                                    name="CFile21_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.CFile21_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="CFile25_endo">C - File 25 เบอร์ ...{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="CFile25_endo"
                                                    name="CFile25_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.CFile25_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="HFile21mm1540_endo">H - File 21 mm.(15-40){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="HFile21mm1540_endo"
                                                    name="HFile21mm1540_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.HFile21mm1540_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="HFile21mm4580_endo">H - File 21 mm.(45-80){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="HFile21mm4580_endo"
                                                    name="HFile21mm4580_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.HFile21mm4580_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="HFile25mm1540_endo">H - File 25 mm.(15-40){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="HFile25mm1540_endo"
                                                    name="HFile25mm1540_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.HFile25mm1540_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="HFile25mm4580_endo">H - File 25 mm.(45-80){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="HFile25mm4580_endo"
                                                    name="HFile25mm4580_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.HFile25mm4580_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="NitiFile21mm1540_endo">Niti - File 21 mm.(15-40){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="NitiFile21mm1540_endo"
                                                    name="NitiFile21mm1540_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.NitiFile21mm1540_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="NitiFile21mm4560_endo">Niti - File 21 mm.(45-60){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="NitiFile21mm4560_endo"
                                                    name="NitiFile21mm4560_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.NitiFile21mm4560_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="NitiFile25mm1540_endo">Niti - File 25 mm.(15-40){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="NitiFile25mm1540_endo"
                                                    name="NitiFile25mm1540_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.NitiFile25mm1540_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="NitiFile25mm4560_endo">Niti - File 25 mm.(45-60){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="NitiFile25mm4560_endo"
                                                    name="NitiFile25mm4560_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.NitiFile25mm4560_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="KFile21mm840_endo">K - File 21 mm.(8-40){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="KFile21mm840_endo"
                                                    name="KFile21mm840_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.KFile21mm840_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="KFile21mm4580_endo">K - File 21 mm.(45-80){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="KFile21mm4580_endo"
                                                    name="KFile21mm4580_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.KFile21mm4580_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="KFile25mm840_endo">K - File 25 mm.(8-40){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="KFile25mm840_endo"
                                                    name="KFile25mm840_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.KFile25mm840_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="KFile25mm4580_endo">K - File 25 mm.(45-80){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="KFile25mm4580_endo"
                                                    name="KFile25mm4580_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.KFile25mm4580_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="KFile30mm840_endo">K - File 30 mm.(8-40){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="KFile30mm840_endo"
                                                    name="KFile30mm840_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.KFile30mm840_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="KFile30mm4580_endo">K - File 30 mm.(45-80){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="KFile30mm4580_endo"
                                                    name="KFile30mm4580_endo"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.KFile30mm4580_endo}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                            <div style={{ flex: 1, height: 2, backgroundColor: '#D0D3D4', marginBottom: 30, marginTop: 10 }}>
                            </div>
                            <label style={{ marginLeft: 15, marginBottom: 15 }}>รายการ</label>
                            <label style={{ marginLeft: 475, marginBottom: 15 }}>รายการ</label>

                            <Container style={{ fontSize: 15 }}>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <label htmlFor="testkit_periood">ชุดตรวจ{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="testkit_periood"
                                                    name="testkit_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.testkit_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="backteethscalingkit_periood">ชุุดขูดหินปูนฟันหลัง{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="backteethscalingkit_periood"
                                                    name="backteethscalingkit_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.backteethscalingkit_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="sickelfrontteeth_periood">sickel ฟันหน้า{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="sickelfrontteeth_periood"
                                                    name="sickelfrontteeth_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.sickelfrontteeth_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="sickelposteriorteethS204SD_periood">sickel ฟันหลัง(S204SD){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="sickelposteriorteethS204SD_periood"
                                                    name="sickelposteriorteethS204SD_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.sickelposteriorteethS204SD_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="frontteethcuretteSG34_periood">curette ฟันหน้า (SG3/4){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="frontteethcuretteSG34_periood"
                                                    name="frontteethcuretteSG34_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.frontteethcuretteSG34_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="AfterFive_periood">After Five No....{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="AfterFive_periood"
                                                    name="AfterFive_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.AfterFive_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="MiniFive_periood">Mini Five No....{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="MiniFive_periood"
                                                    name="MiniFive_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.MiniFive_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="PeriodontalProbeUNC15_periood">Periodontal Probe (UNC15){""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="PeriodontalProbeUNC15_periood"
                                                    name="PeriodontalProbeUNC15_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.PeriodontalProbeUNC15_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="WHOProbe_periood">WHO Probe{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="WHOProbe_periood"
                                                    name="WHOProbe_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.WHOProbe_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="NeberProbe_periood">Neber Probe{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="NeberProbe_periood"
                                                    name="NeberProbe_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.NeberProbe_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="pourthemedicine_periood">ถ่วยนํ้ายา{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="pourthemedicine_periood"
                                                    name="pourthemedicine_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.pourthemedicine_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Dappendish_periood">Dappen dish{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Dappendish_periood"
                                                    name="Dappendish_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Dappendish_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Mouthprop_periood">Mouth prop{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Mouthprop_periood"
                                                    name="Mouthprop_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Mouthprop_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="AnestheticSyringe_periood">Syring ยาชา{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="AnestheticSyringe_periood"
                                                    name="AnestheticSyringe_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.AnestheticSyringe_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="whetstone_periood">หินลับ{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="whetstone_periood"
                                                    name="whetstone_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.whetstone_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="P5scraper_periood">หัวขูด P5{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="P5scraper_periood"
                                                    name="P5scraper_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.P5scraper_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <label htmlFor="P10scraper_periood">หัวขูด P10{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="P10scraper_periood"
                                                    name="P10scraper_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.P10scraper_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Rabbercup_periood">Rabber cup{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Rabbercup_periood"
                                                    name="Rabbercup_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Rabbercup_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Rabberbrush_periood">Rabber brush{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Rabberbrush_periood"
                                                    name="Rabberbrush_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Rabberbrush_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="cottonbud_periood">ไม้พันสำลี{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="cottonbud_periood"
                                                    name="cottonbud_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.cottonbud_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Airotor_periood">Airotor{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Airotor_periood"
                                                    name="Airotor_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Airotor_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Contra_periood">Contra{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Contra_periood"
                                                    name="Contra_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Contra_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Phophy_periood">Phophy{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Phophy_periood"
                                                    name="Phophy_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Phophy_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Straight_periood">Straight{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Straight_periood"
                                                    name="Straight_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Straight_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Triplesyring_periood">Triple syring{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Triplesyring_periood"
                                                    name="Triplesyring_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Triplesyring_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="ruler_periood">ไม้บรรทัด{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="ruler_periood"
                                                    name="ruler_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.ruler_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="Retractor_periood">Retractor{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="Retractor_periood"
                                                    name="Retractor_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Retractor_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="FabricMiddlepunch_periood">ผ้าเจาะกลาง{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="FabricMiddlepunch_periood"
                                                    name="FabricMiddlepunch_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.FabricMiddlepunch_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="veil_periood">ผ้าคลุม{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="veil_periood"
                                                    name="veil_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.veil_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="unitcleaningkit_periood">ชุดทำความสะอาดยูนิต{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="unitcleaningkit_periood"
                                                    name="unitcleaningkit_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.unitcleaningkit_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="gumsurgerykit_periood">ชุดผ่าตัดเหงือก{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="gumsurgerykit_periood"
                                                    name="gumsurgerykit_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.gumsurgerykit_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <label htmlFor="gumsurgicalgown_periood">ชุดผ้าผ่าตัดเหงือก{""}</label>
                                            </Col>
                                            <Col style={{ marginTop: -10 }}>
                                                <select
                                                    id="gumsurgicalgown_periood"
                                                    name="gumsurgicalgown_periood"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.gumsurgicalgown_periood}
                                                >
                                                    <option value="" label="เลือกจำนวน" />
                                                    <option value="1" label="1" />
                                                    <option value="2" label="2" />
                                                    <option value="3" label="3" />
                                                    <option value="4" label="4" />
                                                    <option value="5" label="5" />
                                                    <option value="6" label="6" />
                                                    <option value="7" label="7" />
                                                    <option value="8" label="8" />
                                                    <option value="9" label="9" />
                                                    <option value="10" label="10" />
                                                </select>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                            </Container>
                            <br />
                            <center>
                                <button className="But" style={{ backgroundColor: '#1565C0', marginBottom: 10 }} type="submit" >Submit</button>

                            </center>
                        </div>
                    </div>
                </form>
            </StyleModal>
        </div>
    );
};


export default ToolModal;
