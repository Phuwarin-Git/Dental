import React, { useContext, useState, useEffect } from 'react'
import CloseButton from 'react-bootstrap/CloseButton'
import StyleModal from './adminhistory'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Adminmodal = ({ unique }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [Tool, setDetials] = useState()
  const [NameState, SetNameState] = useState({})

  useEffect(() => {
    getTool()
  }, [modalIsOpen])

  function openModal () {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }

  const getTool = () => {
    axios.get('http://localhost:3000/Tool/find/all').then(item => {
      console.log('data :', item.data)
      return filterToolsDetails(item.data)
    })
  }

  const filterToolsDetails = item => {
    const res = item.filter(item => {
      return item.uniqueID === unique
    })
    console.log('Details Tools ที่มาพร้อมกับชื่อ Object:', res[0])
    // SetNameState(Object.keys(res[0]))
    // const myJSON = JSON.stringify(res, null, 2)

    setDetials(res)
  }

  return (
    <div>
      <Button
        style={{ background: '#1565C0', color: 'white', width: '150px' }}
        onClick={openModal}
      >
        อุปกรณ์
      </Button>
      <StyleModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='modal'
      >
        <CloseButton style={{marginRight:20}} onClick={closeModal} />
        <div style={{ mixHeight: '1000px', maxHeight: '1000px' }}>
          <center>
            <br />
            <h3 class="text-primary" style={{ fontWeight: 'bold' }}>
              เครื่องมือเบิกงาน Endo
            </h3>
          </center>
          <div style={{ overflowY: 'auto', fontSize: 17 }}>
            <br />
            <Table
              striped
              bordered
              hover
              variant=''
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: '97%',
                marginTop: '20px'
              }}
            >
              <Row>
                <Col>
                  <thead className='theadAdmin1' style={{}}>
                    <tr>
                      <th style={{width:460}} class="text-primary">อุปกรณ์</th>
                      <th class="text-primary" >จำนวน</th>
                    </tr>
                  </thead>
                  {Tool?.map(item => {
                    if (item.testkit_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>ชุดตรวจ</td>
                            <td>{item.testkit_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.glassofwater_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>แก้วน้ำ</td>
                            <td>{item.glassofwater_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Tripplesyring_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Tripple syring</td>
                            <td>{item.Tripplesyring_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.FabricMiddlepunch_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>ผ้าเจาะกลาง</td>
                            <td>{item.FabricMiddlepunch_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.veil_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>ผ้าคลุม</td>
                            <td>{item.veil_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.UNC15Probe_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>UNC 15 Probe</td>
                            <td>{item.UNC15Probe_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.medicinecup_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>ถ้วยนํ้ายา</td>
                            <td>{item.medicinecup_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Dappendish_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Dappen dish</td>
                            <td>{item.Dappendish_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Mouthprop_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Mouth prop</td>
                            <td>{item.Mouthprop_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Glasslab_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Glass lab</td>
                            <td>{item.Glasslab_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Airotor_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Airotor</td>
                            <td>{item.Airotor_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Contra_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Contra</td>
                            <td>{item.Contra_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.cottonbud_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>ไม้พันสำลี </td>
                            <td>{item.cottonbud_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Rubbercup_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Rubber cup/tip/Brush</td>
                            <td>{item.Rubbercup_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.AnestheticSyringe_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Syringe ยาชา</td>
                            <td>{item.AnestheticSyringe_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.BladeHolder_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Blade Holder</td>
                            <td>{item.BladeHolder_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Blade_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Blade No....</td>
                            <td>{item.Blade_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Compositstopperset_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>ชุดอุด Composit</td>
                            <td>{item.Compositstopperset_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Amalgamfillingset_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>ชุดอุด Amalgam</td>
                            <td>{item.Amalgamfillingset_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Compositsandingsetslowrewind_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>ชุดขัด Composit กรอช้า</td>
                            <td>{item.Compositsandingsetslowrewind_toolcc1}</td>
                          </tr>
                        </tbody>
                        
                      )
                    } else {
                      return
                    }
                  })}
                </Col>
                <Col>
                  <thead className='theadAdmin2'>
                    <tr>
                      <th style={{width:460}} class="text-primary">อุปกรณ์</th>
                      <th class="text-primary"  > จำนวน</th>
                    </tr>
                  </thead>
                  {Tool?.map(item => {
                    if (item.Compositsandingsetfastrewinding_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>ชุดขัด Composit กรอเร็ว</td>
                            <td>{item.Compositsandingsetfastrewinding_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.plasticcomposit_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>plastic composit</td>
                            <td>{item.plasticcomposit_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Spoonexcavatorlarge_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Spoon excavator ใหญ่</td>
                            <td>{item.Spoonexcavatorlarge_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.MatrixV3_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Matrix V3 Ring ...</td>
                            <td>{item.MatrixV3_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.MatrixV3Forcep_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Matrix V3 Forcep</td>
                            <td>{item.MatrixV3Forcep_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Rounddimondbursetslow_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Round dimond bur (กรอช้า)</td>
                            <td>{item.Rounddimondbursetslow_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Cylinderdimondbursetslow_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Cylinder dimond bur (กรอช้า)</td>
                            <td>{item.Cylinderdimondbursetslow_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Rounddimondbursetfast_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Tripple</td>
                            <td>{item.Rounddimondbursetfast_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Cylinderdimondbursetfast_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Cylinder dimond bur (กรอเร็ว)</td>
                            <td>{item.Cylinderdimondbursetfast_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Dycalcarrier_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Dycal carrier </td>
                            <td>{item.Dycalcarrier_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Spatulaplastic_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Spatula plastic</td>
                            <td>{item.Spatulaplastic_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Cementspatula_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Cement spatula</td>
                            <td>{item.Cementspatula_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Mendrelscrubset_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>ชุดขัด Mendrel</td>
                            <td>{item.Mendrelscrubset_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Poponsmall_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Pop on เล็ก/ใหญ่</td>
                            <td>{item.Poponsmall_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Rubberdamset_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>ชุด Rubber dam</td>
                            <td>{item.Rubberdamset_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.clamp_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>clamp No.</td>
                            <td>{item.clamp_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Steelheadslowdown_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>หัว Steel กรอช้า</td>
                            <td>{item.Steelheadslowdown_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.Astropolpolishingset_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>ชุดขัด Astropol</td>
                            <td>{item.Astropolpolishingset_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.IvoryTofflemirematrix_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>Ivory / Tofflemire matrix</td>
                            <td>{item.IvoryTofflemirematrix_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                  {Tool?.map(item => {
                    if (item.hightpowersuction_toolcc1 != ' ') {
                      return (
                        <tbody>
                          <tr>
                            <td>hight power suction</td>
                            <td>{item.hightpowersuction_toolcc1}</td>
                          </tr>
                        </tbody>
                      )
                    } else {
                      return
                    }
                  })}
                </Col>
              </Row>
            </Table>
            <br />
          </div>
        </div>
      </StyleModal>
    </div>
  )
}

export default Adminmodal
