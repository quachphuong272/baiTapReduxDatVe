import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../../redux/actions/BaiTapDatVeActions'

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className="mt-5">
                    <button className="gheDuocChon" style={{ marginLeft: '-120px' }}></button><span className="text-light ml-3" style={{ fontSize: '20px' }}>Ghế đã đặt</span>
                    <br />
                    <button className="gheDangChon" style={{ marginLeft: '-100px' }}></button><span className="text-light ml-3" style={{ fontSize: '20px' }}>Ghế đang đặt</span>
                    <br />
                    <button className="ghe" style={{ marginLeft: '-130px' }}></button><span className="text-light ml-3" style={{ fontSize: '20px' }}>Ghế trống</span>
                </div>

                <div className="mt-5">
                    <table className="table" border="3">
                        <thead>
                            <tr className="text-light" style={{ fontSize: '20px' }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia}</td>
                                    <td><button className="btn btn-danger" onClick={() => {
                                        this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                    }}>Hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className="text-warning">
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                    return tongTien += gheDangDat.gia;
                                }, 0).toLocaleString()}</td>
                            </tr>

                        </tfoot>
                    </table>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTinDatGhe);