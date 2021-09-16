
import StyleModal from "./index.view";
import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CloseButton from 'react-bootstrap/CloseButton'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import '../../Yup.css'
import { Label } from 'semantic-ui-react';
import Modal from 'react-modal';
import Accordion from 'react-bootstrap/Accordion';



const ToolModal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


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

        alert("Success")
        return axios.post("http://selab.mfu.ac.th:8318/Tool_PERIO_OD/create", ApiSet).then((res) => {
            return console.log("Res :", res),
                axios.post("http://selab.mfu.ac.th:8318/Tool_Endo/create", ApiSet1).then((res) => {
                    return console.log("Res :", res)
                }),
                axios.post("http://selab.mfu.ac.th:8318/Tool_PERIO_OD/create", ApiSet2).then((res) => {
                    return console.log("Res :", res)
                })
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
                values.KFile30mm4580_endo	,
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
                <form onSubmit={formik.handleSubmit}>
                    <CloseButton style={{ margin: 5, }} onClick={closeModal}></CloseButton>
                    <div>
                        <center>
                            <h1>Equipment Withdraw</h1>
                        </center>
                        <div class="row" style={{ height: 600, marginLeft: 15 }}>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Tool</Accordion.Header>
                                    <Accordion.Body style={{ backgroundColor: "#16AFF9" }}>
                                        <div class="col align-self-start" variant="outline-secondary">
                                            <label htmlFor="testkit_toolcc1">Tool :{""}</label>
                                            <input
                                                id="testkit_toolcc1"
                                                name="testkit_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.testkit_toolcc1}
                                            />
                                            <label htmlFor="glassofwater_toolcc1">Tool :{""}</label>
                                            <input
                                                id="glassofwater_toolcc1"
                                                name="glassofwater_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.glassofwater_toolcc1}
                                            />
                                            <label htmlFor="Tripplesyring_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Tripplesyring_toolcc1"
                                                name="Tripplesyring_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Tripplesyring_toolcc1}
                                            />
                                            <label htmlFor="FabricMiddlepunch_toolcc1">Tool :{""}</label>
                                            <input
                                                id="FabricMiddlepunch_toolcc1"
                                                name="FabricMiddlepunch_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.FabricMiddlepunch_toolcc1}
                                            />
                                            <label htmlFor="veil_toolcc1">Tool :{""}</label>
                                            <input
                                                id="veil_toolcc1"
                                                name="veil_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.veil_toolcc1}
                                            />
                                            <label htmlFor="UNC15Probe_toolcc1">Tool :{""}</label>
                                            <input
                                                id="UNC15Probe_toolcc1"
                                                name="UNC15Probe_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.UNC15Probe_toolcc1}
                                            />
                                            <label htmlFor="medicinecup_toolcc1">Tool :{""}</label>
                                            <input
                                                id="medicinecup_toolcc1"
                                                name="medicinecup_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.medicinecup_toolcc1}
                                            />
                                            <label htmlFor="Dappendish_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Dappendish_toolcc1"
                                                name="Dappendish_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Dappendish_toolcc1}
                                            />
                                            <label htmlFor="Mouthprop_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Mouthprop_toolcc1"
                                                name="Mouthprop_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Mouthprop_toolcc1}
                                            />
                                            <label htmlFor="Glasslab_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Glasslab_toolcc1"
                                                name="Glasslab_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Glasslab_toolcc1}
                                            />
                                            <label htmlFor="Airotor_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Airotor_toolcc1"
                                                name="Airotor_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Airotor_toolcc1}
                                            />
                                            <label htmlFor="Contra_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Contra_toolcc1"
                                                name="Contra_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Contra_toolcc1}
                                            />
                                            <label htmlFor="cottonbud_toolcc1">Tool :{""}</label>
                                            <input
                                                id="cottonbud_toolcc1"
                                                name="cottonbud_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.cottonbud_toolcc1}
                                            />
                                            <label htmlFor="Rubbercup_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Rubbercup_toolcc1"
                                                name="Rubbercup_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Rubbercup_toolcc1}
                                            />
                                            <label htmlFor="AnestheticSyringe_toolcc1">Tool :{""}</label>
                                            <input
                                                id="AnestheticSyringe_toolcc1"
                                                name="AnestheticSyringe_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.AnestheticSyringe_toolcc1}
                                            />
                                            <label htmlFor="BladeHolder_toolcc1">Tool :{""}</label>
                                            <input
                                                id="BladeHolder_toolcc1"
                                                name="BladeHolder_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.BladeHolder_toolcc1}
                                            />
                                            <label htmlFor="Blade_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Blade_toolcc1"
                                                name="Blade_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Blade_toolcc1}
                                            />
                                            <label htmlFor="Compositstopperset_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Compositstopperset_toolcc1"
                                                name="Compositstopperset_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Compositstopperset_toolcc1}
                                            />
                                            <label htmlFor="Amalgamfillingset_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Amalgamfillingset_toolcc1"
                                                name="Amalgamfillingset_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Amalgamfillingset_toolcc1}
                                            />
                                            <label htmlFor="Compositsandingsetslowrewind_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Compositsandingsetslowrewind_toolcc1"
                                                name="Compositsandingsetslowrewind_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Compositsandingsetslowrewind_toolcc1}
                                            />
                                            <label htmlFor="Compositsandingsetfastrewinding_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Compositsandingsetfastrewinding_toolcc1"
                                                name="Compositsandingsetfastrewinding_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Compositsandingsetfastrewinding_toolcc1}
                                            />
                                            <label htmlFor="plasticcomposit_toolcc1">Tool :{""}</label>
                                            <input
                                                id="plasticcomposit_toolcc1"
                                                name="plasticcomposit_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.plasticcomposit_toolcc1}
                                            />
                                            <label htmlFor="Spoonexcavatorlarge_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Spoonexcavatorlarge_toolcc1"
                                                name="Spoonexcavatorlarge_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Spoonexcavatorlarge_toolcc1}
                                            />
                                            <label htmlFor="MatrixV3_toolcc1">Tool :{""}</label>
                                            <input
                                                id="MatrixV3_toolcc1"
                                                name="MatrixV3_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.MatrixV3_toolcc1}
                                            />
                                            <label htmlFor="MatrixV3Forcep_toolcc1">Tool :{""}</label>
                                            <input
                                                id="MatrixV3Forcep_toolcc1"
                                                name="MatrixV3Forcep_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.MatrixV3Forcep_toolcc1}
                                            />
                                            <label htmlFor="Rounddimondbursetslow_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Rounddimondbursetslow_toolcc1"
                                                name="Rounddimondbursetslow_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Rounddimondbursetslow_toolcc1}
                                            />
                                            <label htmlFor="Cylinderdimondbursetslow_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Cylinderdimondbursetslow_toolcc1"
                                                name="Cylinderdimondbursetslow_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Cylinderdimondbursetslow_toolcc1}
                                            />
                                            <label htmlFor="Rounddimondbursetfast_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Rounddimondbursetfast_toolcc1"
                                                name="Rounddimondbursetfast_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Rounddimondbursetfast_toolcc1}
                                            />
                                            <label htmlFor="Cylinderdimondbursetfast_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Cylinderdimondbursetfast_toolcc1"
                                                name="Cylinderdimondbursetfast_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Cylinderdimondbursetfast_toolcc1}
                                            />
                                            <label htmlFor="Dycalcarrier_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Dycalcarrier_toolcc1"
                                                name="Dycalcarrier_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Dycalcarrier_toolcc1}
                                            />
                                            <label htmlFor="Spatulaplastic_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Spatulaplastic_toolcc1"
                                                name="Spatulaplastic_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Spatulaplastic_toolcc1}
                                            />
                                            <label htmlFor="Cementspatula_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Cementspatula_toolcc1"
                                                name="Cementspatula_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Cementspatula_toolcc1}
                                            />
                                            <label htmlFor="Mendrelscrubset_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Mendrelscrubset_toolcc1"
                                                name="Mendrelscrubset_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Mendrelscrubset_toolcc1}
                                            />
                                            <label htmlFor="Poponsmall_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Poponsmall_toolcc1"
                                                name="Poponsmall_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Poponsmall_toolcc1}
                                            />
                                            <label htmlFor="Rubberdamset_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Rubberdamset_toolcc1"
                                                name="Rubberdamset_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Rubberdamset_toolcc1}
                                            />
                                            <label htmlFor="clamp_toolcc1">Tool :{""}</label>
                                            <input
                                                id="clamp_toolcc1"
                                                name="clamp_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.clamp_toolcc1}
                                            />
                                            <label htmlFor="Steelheadslowdown_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Steelheadslowdown_toolcc1"
                                                name="Steelheadslowdown_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Steelheadslowdown_toolcc1}
                                            />
                                            <label htmlFor="Astropolpolishingset_toolcc1">Tool :{""}</label>
                                            <input
                                                id="Astropolpolishingset_toolcc1"
                                                name="Astropolpolishingset_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Astropolpolishingset_toolcc1}
                                            />
                                            <label htmlFor="IvoryTofflemirematrix_toolcc1">Tool :{""}</label>
                                            <input
                                                id="IvoryTofflemirematrix_toolcc1"
                                                name="IvoryTofflemirematrix_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.IvoryTofflemirematrix_toolcc1}
                                            />
                                            <label htmlFor="hightpowersuction_toolcc1">Tool :{""}</label>
                                            <input
                                                id="hightpowersuction_toolcc1"
                                                name="hightpowersuction_toolcc1"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.hightpowersuction_toolcc1}
                                            />
                                        </div>
                                        <div class="col align-self-end">

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Tool_Endo</Accordion.Header>
                                    <Accordion.Body style={{ backgroundColor: "#16AFF9" }}>
                                        <div class="col align-self-start">
                                            <label htmlFor="FabricMiddlepunch_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="FabricMiddlepunch_endo"
                                                name="FabricMiddlepunch_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.FabricMiddlepunch_endo}
                                            />
                                            <label htmlFor="veil_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="veil_endo"
                                                name="veil_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.veil_endo}
                                            />
                                            <label htmlFor="testkit_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="testkit_endo"
                                                name="testkit_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.testkit_endo}
                                            />
                                            <label htmlFor="Tripplesyringe_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="Tripplesyringe_endo"
                                                name="Tripplesyringe_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Tripplesyringe_endo}
                                            />
                                            <label htmlFor="Twoouncesglass_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="Twoouncesglass_endo"
                                                name="Twoouncesglass_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Twoouncesglass_endo}
                                            />
                                            <label htmlFor="Mouthprop_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="Mouthprop_endo"
                                                name="Mouthprop_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Mouthprop_endo}
                                            />
                                            <label htmlFor="AnestheticSyringe_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="AnestheticSyringe_endo"
                                                name="AnestheticSyringe_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.AnestheticSyringe_endo}
                                            />
                                            <label htmlFor="cottonbud_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="cottonbud_endo"
                                                name="cottonbud_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.cottonbud_endo}
                                            />
                                            <label htmlFor="Airotor_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="Airotor_endo"
                                                name="Airotor_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Airotor_endo}
                                            />
                                            <label htmlFor="Contra_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="Contra_endo"
                                                name="Contra_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Contra_endo}
                                            />
                                            <label htmlFor="FileStand_endo ">Tool_Endo :{""}</label>
                                            <input
                                                id="FileStand_endo "
                                                name="FileStand_endo "
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.FileStand_endo}
                                            />
                                            <label htmlFor="PlatePaperPoint_endo ">Tool_Endo :{""}</label>
                                            <input
                                                id="PlatePaperPoint_endo "
                                                name="PlatePaperPoint_endo "
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.PlatePaperPoint_endo}
                                            />
                                            <label htmlFor="RubberdamFlame_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="RubberdamFlame_endo"
                                                name="RubberdamFlame_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.RubberdamFlame_endo}
                                            />
                                            <label htmlFor="RubberdamSheet_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="RubberdamSheet_endo"
                                                name="RubberdamSheet_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.RubberdamSheet_endo}
                                            />
                                            <label htmlFor="Clamp_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="Clamp_endo"
                                                name="Clamp_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Clamp_endo}
                                            />
                                            <label htmlFor="EndoBursBoxHead_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="EndoBursBoxHead_endo"
                                                name="EndoBursBoxHead_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.EndoBursBoxHead_endo}
                                            />
                                            <label htmlFor="Barbedbrodch_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="Barbedbrodch_endo"
                                                name="Barbedbrodch_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Barbedbrodch_endo}
                                            />
                                            <label htmlFor="Lentulospiral_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="Lentulospiral_endo"
                                                name="Lentulospiral_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Lentulospiral_endo}
                                            />
                                            <label htmlFor="ProtaperHand21mm_endo ">Tool_Endo :{""}</label>
                                            <input
                                                id="ProtaperHand21mm_endo "
                                                name="ProtaperHand21mm_endo "
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.ProtaperHand21mm_endo}
                                            />
                                            <label htmlFor="ProtaperHand25mm_endo ">Tool_Endo :{""}</label>
                                            <input
                                                id="ProtaperHand25mm_endo "
                                                name="ProtaperHand25mm_endo "
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.ProtaperHand25mm_endo}
                                            />
                                            <label htmlFor="GateDrillheadfrontteeth_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="GateDrillheadfrontteeth_endo"
                                                name="GateDrillheadfrontteeth_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.GateDrillheadfrontteeth_endo}
                                            />
                                            <label htmlFor="GateDrillheadrearteeth_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="GateDrillheadrearteeth_endo"
                                                name="GateDrillheadrearteeth_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.GateDrillheadrearteeth_endo}
                                            />
                                            <label htmlFor="Syringerinse5ml_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="Syringerinse5ml_endo"
                                                name="Syringerinse5ml_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Syringerinse5ml_endo}
                                            />
                                            <label htmlFor="WashneedleNo2427_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="WashneedleNo2427_endo"
                                                name="WashneedleNo2427_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.WashneedleNo2427_endo}
                                            />
                                            <label htmlFor="HooktheRootZx_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="HooktheRootZx_endo"
                                                name="HooktheRootZx_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.HooktheRootZx_endo}
                                            />
                                            <label htmlFor="Glasslab_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="Glasslab_endo"
                                                name="Glasslab_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Glasslab_endo}
                                            />
                                            <label htmlFor="HighPowerSuction_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="HighPowerSuction_endo"
                                                name="HighPowerSuction_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.HighPowerSuction_endo}
                                            />
                                            <label htmlFor="OCBoxset_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="OCBoxset_endo"
                                                name="OCBoxset_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.OCBoxset_endo}
                                            />
                                            <label htmlFor="FRCBoxset_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="FRCBoxset_endo"
                                                name="FRCBoxset_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.FRCBoxset_endo}
                                            />
                                            <label htmlFor="CFile21_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="CFile21_endo"
                                                name="CFile21_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.CFile21_endo}
                                            />
                                            <label htmlFor="CFile25_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="CFile25_endo"
                                                name="CFile25_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.CFile25_endo}
                                            />
                                            <label htmlFor="HFile21mm1540_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="HFile21mm1540_endo"
                                                name="HFile21mm1540_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.HFile21mm1540_endo}
                                            />
                                            <label htmlFor="HFile21mm4580_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="HFile21mm4580_endo"
                                                name="HFile21mm4580_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.HFile21mm4580_endo}
                                            />
                                            <label htmlFor="HFile25mm1540_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="HFile25mm1540_endo"
                                                name="HFile25mm1540_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.HFile25mm1540_endo}
                                            />
                                            <label htmlFor="HFile25mm4580_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="HFile25mm4580_endo"
                                                name="HFile25mm4580_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.HFile25mm4580_endo}
                                            />
                                            <label htmlFor="NitiFile21mm1540_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="NitiFile21mm1540_endo"
                                                name="NitiFile21mm1540_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.NitiFile21mm1540_endo}
                                            />
                                            <label htmlFor="NitiFile21mm4560_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="NitiFile21mm4560_endo"
                                                name="NitiFile21mm4560_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.NitiFile21mm4560_endo}
                                            />
                                            <label htmlFor="NitiFile25mm1540_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="NitiFile25mm1540_endo"
                                                name="NitiFile25mm1540_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.NitiFile25mm1540_endo}
                                            />
                                            <label htmlFor="NitiFile25mm4560_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="NitiFile25mm4560_endo"
                                                name="NitiFile25mm4560_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.NitiFile25mm4560_endo}
                                            /><label htmlFor="KFile21mm840_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="KFile21mm840_endo"
                                                name="KFile21mm840_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.KFile21mm840_endo}
                                            />
                                            <label htmlFor="KFile21mm4580_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="KFile21mm4580_endo"
                                                name="KFile21mm4580_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.KFile21mm4580_endo}
                                            />
                                            <label htmlFor="KFile25mm840_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="KFile25mm840_endo"
                                                name="KFile25mm840_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.KFile25mm840_endo}
                                            />
                                            <label htmlFor="KFile25mm4580_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="KFile25mm4580_endo"
                                                name="KFile25mm4580_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.KFile25mm4580_endo}
                                            />
                                            <label htmlFor="KFile30mm840_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="KFile30mm840_endo"
                                                name="KFile30mm840_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.KFile30mm840_endo}
                                            />
                                            <label htmlFor="KFile30mm4580_endo">Tool_Endo :{""}</label>
                                            <input
                                                id="KFile30mm4580_endo"
                                                name="KFile30mm4580_endo"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.KFile30mm4580_endo}
                                            />



                                        </div>
                                        <div class="col align-self-end">

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Tool_PERIO_OD</Accordion.Header>
                                    <Accordion.Body style={{ backgroundColor: "#16AFF9" }}>
                                        <div class="col align-self-start">
                                            <label htmlFor="testkit_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="testkit_periood"
                                                name="testkit_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.testkit_periood}
                                            />
                                            <label htmlFor="backteethscalingkit_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="backteethscalingkit_periood"
                                                name="backteethscalingkit_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.backteethscalingkit_periood}
                                            />
                                            <label htmlFor="sickelfrontteeth_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="sickelfrontteeth_periood"
                                                name="sickelfrontteeth_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.sickelfrontteeth_periood}
                                            />
                                            <label htmlFor="sickelposteriorteethS204SD_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="sickelposteriorteethS204SD_periood"
                                                name="sickelposteriorteethS204SD_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.sickelposteriorteethS204SD_periood}
                                            />
                                            <label htmlFor="frontteethcuretteSG34_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="frontteethcuretteSG34_periood"
                                                name="frontteethcuretteSG34_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.frontteethcuretteSG34_periood}
                                            />
                                            <label htmlFor="AfterFive_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="AfterFive_periood"
                                                name="AfterFive_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.AfterFive_periood}
                                            />
                                            <label htmlFor="MiniFive_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="MiniFive_periood"
                                                name="MiniFive_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.MiniFive_periood}
                                            />
                                            <label htmlFor="PeriodontalProbeUNC15_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="PeriodontalProbeUNC15_periood"
                                                name="PeriodontalProbeUNC15_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.PeriodontalProbeUNC15_periood}
                                            />
                                            <label htmlFor="WHOProbe_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="WHOProbe_periood"
                                                name="WHOProbe_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.WHOProbe_periood}
                                            />
                                            <label htmlFor="NeberProbe_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="NeberProbe_periood"
                                                name="NeberProbe_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.NeberProbe_periood}
                                            />
                                            <label htmlFor="pourthemedicine_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="pourthemedicine_periood"
                                                name="pourthemedicine_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.pourthemedicine_periood}
                                            />
                                            <label htmlFor="Dappendish_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="Dappendish_periood"
                                                name="Dappendish_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Dappendish_periood}
                                            />
                                            <label htmlFor="Mouthprop_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="Mouthprop_periood"
                                                name="Mouthprop_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Mouthprop_periood}
                                            />
                                            <label htmlFor="AnestheticSyringe_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="AnestheticSyringe_periood"
                                                name="AnestheticSyringe_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.AnestheticSyringe_periood}
                                            />
                                            <label htmlFor="whetstone_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="whetstone_periood"
                                                name="whetstone_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.whetstone_periood}
                                            />
                                            <label htmlFor="P5scraper_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="P5scraper_periood"
                                                name="P5scraper_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.P5scraper_periood}
                                            />
                                            <label htmlFor="P10scraper_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="P10scraper_periood"
                                                name="P10scraper_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.P10scraper_periood}
                                            />
                                            <label htmlFor="Rabbercup_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="Rabbercup_periood"
                                                name="Rabbercup_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Rabbercup_periood}
                                            />
                                            <label htmlFor="Rabberbrush_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="Rabberbrush_periood"
                                                name="Rabberbrush_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Rabberbrush_periood}
                                            />
                                            <label htmlFor="cottonbud_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="cottonbud_periood"
                                                name="cottonbud_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.cottonbud_periood}
                                            />
                                            <label htmlFor="Airotor_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="Airotor_periood"
                                                name="Airotor_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Airotor_periood}
                                            />
                                            <label htmlFor="Contra_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="Contra_periood"
                                                name="Contra_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Contra_periood}
                                            />
                                            <label htmlFor="Phophy_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="Phophy_periood"
                                                name="Phophy_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Phophy_periood}
                                            />
                                            <label htmlFor="Straight_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="Straight_periood"
                                                name="Straight_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Straight_periood}
                                            />
                                            <label htmlFor="Triplesyring_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="Triplesyring_periood"
                                                name="Triplesyring_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Triplesyring_periood}
                                            />
                                            <label htmlFor="ruler_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="ruler_periood"
                                                name="ruler_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.ruler_periood}
                                            />
                                            <label htmlFor="Retractor_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="Retractor_periood"
                                                name="Retractor_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Retractor_periood}
                                            />
                                            <label htmlFor="FabricMiddlepunch_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="FabricMiddlepunch_periood"
                                                name="FabricMiddlepunch_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.FabricMiddlepunch_periood}
                                            />
                                            <label htmlFor="veil_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="veil_periood"
                                                name="veil_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.veil_periood}
                                            />
                                            <label htmlFor="unitcleaningkit_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="unitcleaningkit_periood"
                                                name="unitcleaningkit_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.unitcleaningkit_periood}
                                            />
                                            <label htmlFor="gumsurgerykit_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="gumsurgerykit_periood"
                                                name="gumsurgerykit_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.gumsurgerykit_periood}
                                            />
                                            <label htmlFor="gumsurgicalgown_periood">Tool_Endo :{""}</label>
                                            <input
                                                id="gumsurgicalgown_periood"
                                                name="gumsurgicalgown_periood"
                                                placeholder="Number Only"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.gumsurgicalgown_periood}
                                            />

                                        </div>
                                        <div class="col align-self-end">

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <button className="But" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </StyleModal>
        </div>
    );
};



export default ToolModal;
