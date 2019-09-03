import { Op } from 'sequelize';
import Appointment from '../models/Appointment';
import User from '../models/User';
import { startOfDay, endOfDay, parseISO } from 'date-fns';

class ScheduleController {
  async index(req, res) {
    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });
    if (!checkIsProvider) {
      return res.status(400).json({
        error: 'User is not a provider',
      });
    }

    const { date } = req.query;
    const parsedDate = parseISO(date);

    const appointment = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      order: ['date'],
    });

    return res.json(appointment);
  }
}

export default new ScheduleController();
